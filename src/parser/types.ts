import { OpenAPIv31x, OpenAPIv30x } from 'openapi-objects-types'
import JSONSchema from 'openapi-objects-types/types/3.1.x/json-schema'

export type OpenAPI = OpenAPIv30x.OpenAPI | OpenAPIv31x.OpenAPI

export type Schema = OpenAPIv30x.Schema | OpenAPIv31x.Schema

export type Parameter = OpenAPIv30x.Parameter | OpenAPIv31x.Parameter

export type RequestBody = OpenAPIv30x.RequestBody | OpenAPIv31x.RequestBody

export type HttpMethod = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace'

export type Param = { 
    name: string 
    in: 'path' | 'header' | 'query' | 'cookie'   
    schema: Schema 
    required: boolean
}


export type Body = {
    content: Array<{ 'Content-Type': string , schema: Schema }>
    required: boolean
}

export interface SingleSchema extends Partial<JSONSchema> {
    type: 'object'
    properties: {
        path: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: false
        }
        headers: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: true
        }
        cookies: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: true
        }
        query: {
            type: 'object'
            properties: Record<string, Partial<JSONSchema>>
            required: Array<string>
            additionalProperties: true
        }
        body?: Partial<JSONSchema>
    }
    required: Array<string>
    additionalProperties: false
}

export type RequestSchemas = Array<{ contentType: string | null, schema: SingleSchema }>

export type GeneratedSchema = { 
    path: string 
    operation: HttpMethod 
    contentType?: string 
    schema: SingleSchema 
}

export type ProcessContent = (content: Parameter['content']) => Schema

export type GetSchema = (schema: Schema, content: Parameter['content']) => Schema

export type GetParam = (parameter: Parameter) => Param

export type GetParams = (parameters: Array<Parameter>) => Array<Param>

export type GetPathParameters = (schema: OpenAPI, path: string) => Array<Parameter>

export type GetOperationParameters = (schema: OpenAPI, path: string, method: HttpMethod) => Array<Parameter>

export type GetOperationParams = (schema: OpenAPI, path: string, method: HttpMethod) => Array<Param>

export type GetBody = (requestBody: RequestBody) => Body | null

export type GetOperationBody = (schema: OpenAPI, path: string, method: HttpMethod) => Body | null

export type SetOperationSchema = (schema: OpenAPI, path: string, method: HttpMethod) => RequestSchemas // RequestSchema

export type GetPaths = (schema: OpenAPI) => Array<string>

export type GetPathOperations = (schema: OpenAPI, path: string) => Array<HttpMethod>

export type schemasGenerator = (schema: OpenAPI) => Array<GeneratedSchema>



