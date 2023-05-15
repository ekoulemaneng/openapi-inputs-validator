import { Param, GetPathParameters, GetOperationParameters, GetParam, GetParams, RequestSchemas, SingleSchema, GeneratedSchema, GetSchema, Schema, ProcessContent, Parameter, GetBody, Body, GetOperationParams, RequestBody, GetOperationBody, SetOperationSchema, schemasGenerator, GetPaths, GetPathOperations, HttpMethod } from './types'
import * as errors from './errors'

const processContent: ProcessContent = (content) => {
    if (typeof content === 'undefined') throw errors.ContentNotProvided
    let _schema: Schema = {}
    const contentType = Object.keys(content)[0]
    if (typeof contentType === 'undefined') throw errors.ContentTypeUndefined
    const mediaType = content[contentType]
    if (typeof mediaType === 'undefined') throw errors.MediaTypeUndefined
    if (typeof mediaType.schema === 'undefined') throw errors.NoSchemaInMediaType
    _schema = mediaType.schema
    if (typeof mediaType.encoding !== 'undefined') {
        if (_schema.type === 'object' && typeof _schema.properties !== 'undefined') {
            for (const name in mediaType.encoding) {
                if (typeof name !== 'undefined') {
                    const sch = _schema.properties[name]
                    if (typeof sch !== 'undefined') {
                        const _contentType = mediaType.encoding[name]?.contentType
                        if (typeof _contentType !== 'undefined') {
                            sch.contentMediaType = _contentType
                        }
                    }
                }
            }
        }
    }
    return _schema
}

const getSchema: GetSchema = (schema, content) => {
    if (typeof schema === 'undefined' && typeof content === 'undefined') throw errors.SchemaAndContentNotProvided
    if (typeof schema !== 'undefined') return schema
    let _schema: Schema = {}
    if (typeof content !== 'undefined') _schema = processContent(content)
    return _schema
}

const getParam: GetParam = (parameter) => {
    if (typeof parameter === 'undefined') throw errors.ParameterNotProvided
    if (typeof parameter.schema === 'undefined' && typeof parameter.content === 'undefined') throw errors.SchemaAndContentUndefined
    return {
        name: parameter.name,
        in: parameter.in,
        schema: getSchema(parameter.schema as Schema, parameter.content),
        required: parameter.in === 'path' ? true : (parameter.required ?? false)
    }
}

const getParams: GetParams = (parameters) => {
    if (typeof parameters === 'undefined') throw errors.ParametersNotProvided
    else if (!Array.isArray(parameters)) throw errors.ParametersNotArray
    else {
        const result: Array<Param> = []
        parameters.forEach(parameter => {
            const _parameter = getParam(parameter)
            if (_parameter) result.push(_parameter)
        })
        return result
    }
}

const getPathParameters: GetPathParameters = (schema, path) => {
        if (typeof schema === 'undefined') throw errors.SchemaNotProvided
        if (typeof path === 'undefined') throw errors.PathNotProvided
        else {
            const paths = schema.paths
            if (!paths) throw errors.NoPathInSchema
            const pathItem = paths[path]
            if (!pathItem) throw errors.SchemaContainsNotPath
            const parameters = pathItem['parameters']
            if (!parameters) return [] 
            return parameters as Array<unknown> as Array<Parameter>
        }
}

const getOperationParameters: GetOperationParameters = (schema, path, method) => {
    if (typeof schema === 'undefined') throw errors.SchemaNotProvided
    if (typeof path === 'undefined') throw errors.PathNotProvided
    if (typeof method === 'undefined') throw errors.OperationNotProvided
    const paths = schema.paths
    if (!paths) throw errors.NoPathInSchema
    const pathItem = paths[path]
    if (!pathItem) throw errors.SchemaContainsNotPath
    const operation = pathItem[method]
    if (!operation) throw errors.PathContainsNotOperation
    const parameters = operation['parameters']
    if (!parameters) return [] 
    return parameters as Array<unknown> as Array<Parameter>
}

const getOperationParams: GetOperationParams = (schema, path, method) => {
    if (typeof schema === 'undefined') throw errors.SchemaNotProvided
    if (typeof path === 'undefined') throw errors.PathNotProvided
    if (typeof method === 'undefined') throw errors.OperationNotProvided
    const pathParameters = getPathParameters(schema, path)
    const operationParameters = getOperationParameters(schema, path, method)
    const parameters = operationParameters.slice()
    pathParameters.forEach(parameter => {
        if (!parameters.some(param => param.name === parameter.name && param.in === parameter.in)) parameters.push(parameter)
    })
    return getParams(parameters)
}

const getBody: GetBody = (body) => {
    let requestBody: Body | null = null
    if (typeof body === 'undefined') return requestBody
    if (!body.content) return requestBody
    else if (typeof body.content !== 'object') return requestBody
    else {
        requestBody = {
            content: [],
            required: false
        }
        for (const contentType in body.content) {
            if (typeof contentType === 'undefined') continue
            const mediaType = body.content[contentType]
            if (typeof mediaType === 'undefined') continue
            const schema = mediaType['schema']
            if (typeof schema === 'undefined') continue
            requestBody.content.push({ 'Content-Type': contentType, schema })
            requestBody.required = body.required ?? false
        }
        if (requestBody.content.length === 0) requestBody = null
        return requestBody
    }
}

const getOperationBody: GetOperationBody = (schema, path, method) => {
    if (typeof schema === 'undefined') throw errors.SchemaNotProvided
    if (typeof path === 'undefined') throw errors.PathNotProvided
    if (typeof method === 'undefined') throw errors.OperationNotProvided
    const paths = schema.paths
    if (!paths) return null
    const pathItem = paths[path]
    if (!pathItem) return null
    const operation = pathItem[method]
    if (!operation) return null
    const requestBody = operation['requestBody']
    if (!requestBody) return null
    return getBody(requestBody as RequestBody)
}

const setOperationSchema: SetOperationSchema = (schema, path, method) => {

    if (typeof schema === 'undefined') throw errors.SchemaNotProvided
    if (typeof path === 'undefined') throw errors.PathNotProvided
    if (typeof method === 'undefined') throw errors.OperationNotProvided

    // Initialize the result
    const requestSchemas: RequestSchemas = []

    // Get non setted schemas
    const parameters = getOperationParams(schema, path, method)
    const requestBody = getOperationBody(schema, path, method)

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
            headers: {
                type: 'object',
                properties: {},
                required: [] as Array<string>,
                additionalProperties: true
            },
            cookies: {
                type: 'object',
                properties: {},
                required: [] as Array<string>,
                additionalProperties: true
            },
            query: {
                type: 'object',
                properties: {},
                required: [] as Array<string>,
                additionalProperties: true
            }
        },
        required: [] as Array<string>,
        additionalProperties: false
    }

    // Populate parameters keys in the json schema object
    let channels: Array<string> = ['path', 'header', 'cookie', 'query']
    channels.forEach(channel => {
        parameters.forEach(parameter => {
            if (parameter.in === channel) {
                if (channel === 'header') jsonSchema.properties['headers'].properties[parameter.name] = parameter.schema
                else if (channel === 'cookie') jsonSchema.properties['cookies'].properties[parameter.name] = parameter.schema
                else jsonSchema.properties[channel].properties[parameter.name] = parameter.schema
                if (channel === 'path' || parameter.required) {
                    if (channel === 'header') jsonSchema.properties['headers'].required.push(parameter.name)
                    else if (channel === 'cookie') jsonSchema.properties['cookies'].required.push(parameter.name)
                    else jsonSchema.properties[channel].required.push(parameter.name)
                }
            }
        })
    })

    // Populate required arrays
    channels = ['path', 'headers', 'cookies', 'query']
    channels.forEach(channel => {
        if (Object.keys(jsonSchema.properties[channel as 'path' | 'headers' | 'cookies' | 'query'].properties).length > 0) jsonSchema.required.push(channel)
    })

    // Populate the request schema object with request boday value or not the return the final result
    if (!requestBody || requestBody.content.length === 0) {
        requestSchemas.push({ contentType: null, schema: jsonSchema })
        return requestSchemas
    }
    else {
        requestBody.content.forEach(content => {
            let _jsonSchema = JSON.parse(JSON.stringify(jsonSchema))
            _jsonSchema.properties['headers'].properties['Content-Type'] = { type: 'string', pattern: `^${content['Content-Type']}$` }
            _jsonSchema.properties['body'] = content.schema
            if (!requestBody.required) {
                requestSchemas.push({ contentType: content['Content-Type'], schema: _jsonSchema })
                _jsonSchema = JSON.parse(JSON.stringify(jsonSchema))
                requestSchemas.push({ contentType: null, schema: _jsonSchema })
            }
            else {
                if (!_jsonSchema.properties['headers'].required.includes('Content-Type')) _jsonSchema.properties['headers'].required.push('Content-Type')
                if (!_jsonSchema.required.includes('headers')) _jsonSchema.required.push('headers')
                _jsonSchema.required.push('body')
                requestSchemas.push({ contentType: content['Content-Type'], schema: _jsonSchema })
            }
        })
        return requestSchemas
    }
}

export const getPaths: GetPaths = (schema) => {
    if (typeof schema === 'undefined') throw errors.SchemaNotProvided
    const paths = schema.paths
    if (!paths) return []
    else return Object.keys(paths)
}

export const getPathOperations: GetPathOperations = (schema, path) => {
    if (!schema) throw errors.SchemaNotProvided
    if (!path) throw errors.PathNotProvided
    if (!schema.paths) throw errors.NoPathInSchema
    const operations: Array<HttpMethod> = []
    const pathItem = schema.paths[path] 
    if (!pathItem) throw errors.SchemaContainsNotPath
    Object.keys(pathItem).forEach((key) => {
        if (['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'].includes(key)) operations.push(key as HttpMethod)
    })
    return operations
}

const schemasGenerator: schemasGenerator = (schema) => {
    if (!schema) throw errors.SchemaNotProvided
    const requestsSchemas: Array<GeneratedSchema> = []
    const paths = getPaths(schema)
    if (paths.length === 0) return requestsSchemas
    else {
        paths.forEach(path => {
            const operations = getPathOperations(schema, path)
            if (operations.length === 0) return 
            else operations.forEach(operation => {
                const schemas = setOperationSchema(schema, path, operation)
                schemas.forEach(sch => {
                    requestsSchemas.push({ 
                        path, 
                        operation, 
                        contentType: sch.contentType ? sch.contentType : undefined, 
                        schema: sch.schema 
                    })
                })
            })
        })
    }
    return requestsSchemas
}

export default schemasGenerator