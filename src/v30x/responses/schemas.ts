import { Content, GeneratedSchema, GetHeaderSchema, GetHeadersSchemas, GetOperationResponseContentSchema, GetOperationResponsesHeaders, 
         GetOperationResponsesHeadersSchemas, GetOperationStatusResponse, GetResponseContentSchema, GetResponsesStatus, Header, 
         ResponsesSchema, ResponsesSchemasGenerator, SetOperationResponsesSchemas, SingleSchema } from './types'
import { getPaths, getPathOperations } from '../index'
import { OpenAPIv31x } from 'openapi-objects-types'
import HTTPStatusCode from 'openapi-objects-types/types/common/http-status-code'

const getHeaderSchema: GetHeaderSchema = (name, header) => {
    if (!name) throw new Error
    if (!header) throw new Error
    else if (!header.schema) throw new Error
    else return {
        name,
        schema: header.schema,
        required: header.required ?? false
    }
}

const getHeadersSchemas: GetHeadersSchemas = (headers) => {
    const result: Array<Header> = []
    if (!headers) return result
    for (const name in headers) {
        const header = headers[name]
        if (header) result.push(getHeaderSchema(name, header))
    }
    return result
}

const getOperationResponsesHeaders: GetOperationResponsesHeaders = (schema, path, method, status) => {
    if (!schema) throw new Error
    if (!path) throw new Error
    if (!method) throw new Error
    if (!status) throw new Error
    const paths = schema.paths
    if (!paths) throw new Error
    const pathItem = paths[path]
    if (!pathItem) throw new Error
    const operation = pathItem[method]
    if (!operation) throw new Error
    const responses = operation['responses']
    if (!responses) throw new Error
    const response = responses[status] as OpenAPIv31x.Response
    if (!response) throw new Error
    const headers = response['headers']
    if (!headers) throw new Error
    return headers as Record<string, unknown> as Record<string, OpenAPIv31x.Header>
}

const getOperationResponsesHeadersSchemas: GetOperationResponsesHeadersSchemas = (schema, path, operation, status) => {
    if (!schema) throw new Error
    if (!path) throw new Error
    if (!operation) throw new Error
    if (!status) throw new Error
    const headers = getOperationResponsesHeaders(schema, path, operation, status)
    return getHeadersSchemas(headers)
}

const getResponseContentSchema: GetResponseContentSchema = (response) => {
    if (!response) throw new Error
    const content = response.content
    if (!content) throw new Error
    const result: Content = { content: [], required: true }
    for (const key in content) {
        const mediaType = content[key]
        if (!mediaType) {result.content.push({ 'Content-Type': key, schema: { type: 'object', properties: {} } })}
        else {
            const mediaSchema = mediaType.schema
            if (!mediaSchema) result.content.push({ 'Content-Type': key, schema: { type: 'object', properties: {} } })
            else result.content.push({ 'Content-Type': key, schema: mediaSchema })
        }
    }
    return result
}

const getOperationStatusResponse: GetOperationStatusResponse = (schema, path, method, status) => {
    if (!schema) throw new Error
    if (!path) throw new Error
    if (!method) throw new Error
    if (!status) throw new Error
    const paths = schema.paths
    if (!paths) throw new Error
    const pathItem = paths[path]
    if (!pathItem) throw new Error
    const operation = pathItem[method]
    if (!operation) throw new Error
    const responses = operation.responses
    if (!responses) throw new Error
    const response = responses[status]
    if (!response) throw new Error
    return response as unknown as OpenAPIv31x.Response
}

const getOperationResponseContentSchema: GetOperationResponseContentSchema = (schema, path, operation, status) => {
    if (!schema) throw new Error
    if (!path) throw new Error
    if (!operation) throw new Error
    if (!status) throw new Error
    const response = getOperationStatusResponse(schema, path, operation, status)
    return getResponseContentSchema(response)
}

const getResponsesStatus: GetResponsesStatus = (schema, path, method) => {
    if (!schema) throw new Error
    if (!path) throw new Error
    if (!method) throw new Error
    const paths = schema.paths
    if (!paths) throw new Error
    const pathItem = paths[path]
    if (!pathItem) throw new Error
    const operation = pathItem[method]
    if (!operation) throw new Error
    const responses = operation.responses
    if (!responses) throw new Error
    return Object.keys(responses) as Array<HTTPStatusCode>
}

const setOperationResponsesSchemas: SetOperationResponsesSchemas = (schema, path, method) => {

    if (!schema) throw new Error
    if (!path) throw new Error
    if (!method) throw new Error

    // Initialize the result
    const responseSchema: ResponsesSchema = {
        type: 'object',
        oneOf: []
    }

    // Get list of responses status codes then iterate over it to build responses schemas
    const statusCodes = getResponsesStatus(schema, path, method)

    statusCodes.forEach(statusCode => {

        // Get non setted schemas
        const headers = getOperationResponsesHeadersSchemas(schema, path, method, statusCode)
        const body = getOperationResponseContentSchema(schema, path, method, statusCode)

        // Set a json schema
        const jsonSchema: SingleSchema = {
            type: 'object',
            properties: {
                statusCode: {
                    type: 'string',
                    pattern: ''
                },
                headers: {
                    type: 'object',
                    properties: {},
                    required: [] as Array<string>,
                    additionalProperties: true
                },
                content: {}
            },
            required: ['statusCode', 'headers', 'content'],
            additionalProperties: false
        }

        // Set status code
        if (statusCode === '1xx') jsonSchema.properties.statusCode.pattern = '^1\d{2}$'
        else if (statusCode === '2xx') jsonSchema.properties.statusCode.pattern = '^2\d{2}$'
        else if (statusCode === '3xx') jsonSchema.properties.statusCode.pattern = '^3\d{2}$'
        else if (statusCode === '4xx') jsonSchema.properties.statusCode.pattern = '^4\d{2}$'
        else if (statusCode === '5xx') jsonSchema.properties.statusCode.pattern = '^5\d{2}$'
        else if (statusCode === 'default') jsonSchema.properties.statusCode.pattern = '^[1-5]\d{2}$'
        else jsonSchema.properties.statusCode.pattern = `^${statusCode}$`

        // Set headers
        headers.forEach(header => {
            jsonSchema.properties.headers.properties[header.name] = header.schema
            if (header.required) jsonSchema.properties.headers.required.push(header.name)
        })

        // Set content
        body.content.forEach(content => {
            // Set Content-Type header
            jsonSchema.properties.headers.properties['Content-Type'] = { type: 'string', pattern: `^${content['Content-Type']}$` }
            if (!jsonSchema.properties.headers.required.includes('Content-Type')) jsonSchema.properties.headers.required.push('Content-Type')
            // Set content schema
            jsonSchema.properties.content = content.schema
            // Append the json schema to responses schema
            responseSchema.oneOf.push(jsonSchema)
        })

    })

    // Return the final result
    return responseSchema
}

const responsesSchemasGenerator: ResponsesSchemasGenerator = (schema) => {
    const responsesSchemas: Array<GeneratedSchema> = []
    const paths = getPaths(schema)
    if (paths.length === 0) return responsesSchemas
    else {
        paths.forEach(path => {
            const operations = getPathOperations(schema, path)
            operations.forEach(operation => {
                const responsesSchema = setOperationResponsesSchemas(schema, path, operation)
                responsesSchemas.push({ type: 'response', path, operation, schema: responsesSchema })
            })
        })
    }
    return responsesSchemas
}

export default responsesSchemasGenerator