import { OpenAPIv30x } from 'openapi-objects-types'
import JSONSchema from 'openapi-objects-types/types/3.1.x/json-schema'
import { HttpMethod } from '../index'
import HTTPStatusCode from 'openapi-objects-types/types/common/http-status-code'

export type Header = { 
    name: string  
    schema: OpenAPIv30x.Schema 
    required: boolean
}

export type Content = {
    content: Array<{ 'Content-Type': string , schema: OpenAPIv30x.Schema }>
    required: true
}

export interface SingleSchema extends Partial<JSONSchema> {
    type: 'object'
    properties: {
        statusCode: {
            type: 'string'
            pattern: string
        } 
        headers: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: true
        }
        content: Partial<JSONSchema>
    }
    required: Array<string>
    additionalProperties: false
}

export type ResponsesSchema = {
    type: 'object'
    oneOf: Array<SingleSchema>
}

export type GeneratedSchema = { 
    type: 'response'
    path: string 
    operation: HttpMethod 
    schema: ResponsesSchema 
}

export type GetHeaderSchema = (name: string, header: OpenAPIv30x.Header) => Header

export type GetHeadersSchemas = (headers: Record<string, OpenAPIv30x.Header>) => Array<Header>

export type GetOperationResponsesHeaders = (schema: OpenAPIv30x.OpenAPI, path: string, operation: HttpMethod, status: HTTPStatusCode) => Record<string, OpenAPIv30x.Header>

export type GetOperationResponsesHeadersSchemas = (schema: OpenAPIv30x.OpenAPI, path: string, method: HttpMethod, status: HTTPStatusCode) =>  Array<Header>

export type GetResponseContentSchema = (response: OpenAPIv30x.Response) => Content

export type GetOperationStatusResponse = (schema: OpenAPIv30x.OpenAPI, path: string, operation: HttpMethod, status: HTTPStatusCode) => OpenAPIv30x.Response

export type GetOperationResponseContentSchema = (schema: OpenAPIv30x.OpenAPI, path: string, method: HttpMethod, status: HTTPStatusCode) => Content

export type GetResponsesStatus = (schema: OpenAPIv30x.OpenAPI, path: string, method: HttpMethod) => Array<HTTPStatusCode>

export type SetOperationResponsesSchemas = (schema: OpenAPIv30x.OpenAPI, path: string, method: HttpMethod) => ResponsesSchema

export type ResponsesSchemasGenerator = (schema: OpenAPIv30x.OpenAPI) => Array<GeneratedSchema>