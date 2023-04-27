import { OpenAPIv31x } from 'openapi-objects-types'
import { Parameter, GetPathParameters, GetOperationParameters, GetParameterSchema, GetParametersSchemas, GetRequestBodySchemas, RequestBody, GetOperationParametersSchemas, GetOperationRequestBodySchemas, SetOperationRequestSchema, RequestSchema, SingleSchema, RequestsSchemasGenerator, GeneratedSchema } from './types'
import { getPaths, getPathOperations } from '../../validators'


const getSchema: GetParameterSchema = (parameter) => {
    if (!parameter) throw new Error
    else if (!parameter.schema) throw new Error
    else return {
        name: parameter.name,
        in: parameter.in,
        schema: parameter.schema,
        required: parameter.in === 'path' ? true : (parameter.required ?? false)
    }
}

const getSchemas: GetParametersSchemas = (parameters) => {
    const result: Array<Parameter> = []
    if (!parameters) throw new Error
    else if (!Array.isArray(parameters)) throw new Error
    else {
        parameters.forEach(parameter => {
            const _parameter = getSchema(parameter)
            if (_parameter) result.push(_parameter)
        })
        return result
    }
}

const getPathParameters: GetPathParameters = (schema, path) => {
        if (!schema) throw new Error
        else if (typeof schema !== 'object') throw new Error
        if (!path) throw new Error
        else if (typeof path !== 'string') throw new Error
        else {
            const paths = schema.paths
            if (!paths) throw new Error
            const pathItem = paths[path]
            if (!pathItem) throw new Error
            const parameters = pathItem['parameters']
            if (!parameters) return [] // throw new Error
            return parameters as Array<unknown> as Array<OpenAPIv31x.Parameter>
        }
}

const getOperationParameters: GetOperationParameters = (schema, path, method) => {
    if (!schema) throw new Error
    if (typeof schema !== 'object') throw new Error
    if (!path) throw new Error
    if (typeof path !== 'string') throw new Error
    if (!method) throw new Error
    if (typeof method !== 'string') throw new Error
    const paths = schema.paths
    if (!paths) throw new Error
    const pathItem = paths[path]
    if (!pathItem) throw new Error
    const operation = pathItem[method]
    if (!operation) throw new Error
    const parameters = operation['parameters']
    if (!parameters) return [] // throw new Error
    return parameters as Array<unknown> as Array<OpenAPIv31x.Parameter>
}

const getOperationParametersSchemas: GetOperationParametersSchemas = (schema, path, method) => {
    const pathParameters = getPathParameters(schema, path)
    const operationParameters = getOperationParameters(schema, path, method)
    const parameters = operationParameters.slice()
    pathParameters.forEach(parameter => {
        if (!parameters.some(param => param.name === parameter.name && param.in === parameter.in)) parameters.push(parameter)
    })
    return getSchemas(parameters)
}

const getRequestBodySchemas: GetRequestBodySchemas = (body) => {
    if (!body) return null
    const requestBody: RequestBody = {
        content: [],
        required: false
    }
    if (!body.content) return requestBody
    else if (typeof body.content !== 'object') return requestBody
    else {
        Object.keys(body.content).forEach(key => {
            const _key = body.content[key]
            if (!_key) return
            const schema = _key['schema']
            if (!schema) return
            else {
                requestBody.content.push({ 'Content-Type': key, schema })
                requestBody.required = body.required ?? false
            }
        })
        return requestBody
    }
}

const getOperationRequestBodySchemas: GetOperationRequestBodySchemas = (schema, path, method) => {
    if (!schema) return null
    if (typeof schema !== 'object') return null
    if (!path) throw new Error
    if (typeof path !== 'string') return null
    if (!method) throw new Error
    if (typeof method !== 'string') return null
    const paths = schema.paths
    if (!paths) return null
    const pathItem = paths[path]
    if (!pathItem) return null
    const operation = pathItem[method]
    if (!operation) return null
    const requestBody = operation['requestBody']
    if (!requestBody) return null
    return getRequestBodySchemas(requestBody as OpenAPIv31x.RequestBody)
}

const setOperationRequestSchema: SetOperationRequestSchema = (schema, path, method) => {

    // Initialize the result
    const requestSchema: RequestSchema = {
        type: 'object',
        oneOf: []
    }

    // Get non setted schemas
    const parameters = getOperationParametersSchemas(schema, path, method)
    const requestBody = getOperationRequestBodySchemas(schema, path, method)

    // Set a json schema
    const jsonSchema: SingleSchema = {
        type: 'object',
        properties: {
            path: {
                type: 'object',
                properties: {},
                required: [] as Array<string>,
                additionalProperties: false
            },
            header: {
                type: 'object',
                properties: {},
                required: [] as Array<string>,
                additionalProperties: true
            },
            cookie: {
                type: 'object',
                properties: {},
                required: [] as Array<string>,
                additionalProperties: true
            },
            query: {
                type: 'object',
                properties: {},
                required: [] as Array<string>,
                additionalProperties: false
            }
        },
        required: [] as Array<string>,
        additionalProperties: false
    }

    // Populate parameters keys in the json schema object
    const channels: Array<'path' | 'header' | 'cookie' | 'query'> = ['path', 'header', 'cookie', 'query']
    channels.forEach(channel => {
        parameters.forEach(parameter => {
            if (parameter.in === channel) {
                jsonSchema.properties[channel].properties[parameter.name] = parameter.schema
                if (channel === 'path' || parameter.required) jsonSchema.properties[channel].required.push(parameter.name)
            }
        })
        if (Object.keys(jsonSchema.properties[channel].properties).length > 0) jsonSchema.required.push(channel)
    })

    // Populate the request schema object with request boday value or not the return the final result
    if (!requestBody || requestBody.content.length === 0) {
        requestSchema.oneOf.push(jsonSchema)
        return requestSchema
    }
    else {
        requestBody.content.forEach(content => {
            jsonSchema.properties['header'].properties['Content-Type'] = { type: 'string', pattern: `^${content['Content-Type']}$` }
            if(jsonSchema.properties['header'].required.includes('Content-Type')) jsonSchema.properties['header'].required.push('Content-Type')
            jsonSchema.properties['body'] = content.schema
            if (requestBody.required) jsonSchema.required.push('body')
            if (!jsonSchema.required.includes('header')) jsonSchema.required.push('header')
            requestSchema.oneOf.push(jsonSchema)
        })
        return requestSchema
    }
}

const requestsSchemasGenerator: RequestsSchemasGenerator = (schema) => {
    const requestsSchemas: Array<GeneratedSchema> = []
    const paths = getPaths(schema)
    if (paths.length === 0) return requestsSchemas
    else {
        paths.forEach(path => {
            const operations = getPathOperations(schema, path)
            if (operations.length === 0) return 
            else operations.forEach(operation => {
                const requestSchema = setOperationRequestSchema(schema, path, operation)
                requestsSchemas.push({ type: 'request', path, operation, schema: requestSchema })
            })
        })
    }
    return requestsSchemas
}

export default requestsSchemasGenerator