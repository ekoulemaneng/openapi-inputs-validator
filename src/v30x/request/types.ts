import { OpenAPIv30x } from 'openapi-objects-types'
import JSONSchema from 'openapi-objects-types/types/3.0.x/json-schema'
import { HttpMethod } from '../index'

export type Parameter = { 
    name: string 
    in: 'path' | 'header' | 'query' | 'cookie'   
    schema: OpenAPIv30x.Schema 
    required: boolean
}

export type RequestBody = {
    content: Array<{ 'Content-Type': string , schema: OpenAPIv30x.Schema }>
    required: boolean
}

export type SingleSchema = {
    type: 'object'
    properties: {
        path: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: false
        }
        header: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: true
        }
        cookie: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: true
        }
        query: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: false
        }
        body?: Partial<JSONSchema>
    }
    required: Array<string>
    additionalProperties: false
}

export type RequestSchema = {
    type: 'object'
    oneOf: Array<SingleSchema>
}

export type GeneratedSchema = { 
    type: 'request'
    path: string 
    operation: HttpMethod 
    schema: RequestSchema 
}

export type GetParameterSchema = (parameter: OpenAPIv30x.Parameter) => Parameter

export type GetParametersSchemas = (parameters: Array<OpenAPIv30x.Parameter>) => Array<Parameter>

export type GetPathParameters = (schema: OpenAPIv30x.OpenAPI, path: string) => Array<OpenAPIv30x.Parameter>

export type GetOperationParameters = (schema: OpenAPIv30x.OpenAPI, path: string, method: HttpMethod) => Array<OpenAPIv30x.Parameter>

export type GetOperationParametersSchemas = (schema: OpenAPIv30x.OpenAPI, path: string, method: HttpMethod) => Array<Parameter>

export type GetRequestBodySchemas = (requestBody: OpenAPIv30x.RequestBody) => RequestBody | null

export type GetOperationRequestBodySchemas = (schema: OpenAPIv30x.OpenAPI, path: string, method: HttpMethod) => RequestBody | null

export type SetOperationRequestSchema = (schema: OpenAPIv30x.OpenAPI, path: string, method: HttpMethod) => RequestSchema

export type RequestsSchemasGenerator = (schema: OpenAPIv30x.OpenAPI) => Array<GeneratedSchema>



