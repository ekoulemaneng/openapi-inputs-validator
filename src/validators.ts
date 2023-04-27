import { OpenAPIv31x, OpenAPIv30x } from 'openapi-objects-types'
import { ajv } from './ajv'
import { AnyValidateFunction } from 'ajv/dist/core'
import v31xRequestsSchemasGenerator from './v31x/request/schemas'
import v31xReponsesSchemasGenerator from './v31x/responses/schemas'
import * as TypesV31xRequest from './v31x/request/types'
import * as TypesV31xResponses from './v31x/responses/types'
import v30xRequestsSchemasGenerator from './v30x/request/schemas'
import v30xReponsesSchemasGenerator from './v30x/responses/schemas'
import * as TypesV30xRequest from './v30x/request/types'
import * as TypesV30xResponses from './v30x/responses/types'

export type HttpMethod = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace'

export type AjvSchemasIndex = {
    type: 'request' | 'response'
    path: string 
    operation: HttpMethod 
    index: string
}

export type AjvValidatorsIndex = {
    type: 'request' | 'response'
    path: string 
    operation: HttpMethod 
    validator: AnyValidateFunction | undefined
}

export type AjvSchemasGenerator = (schema: OpenAPIv31x.OpenAPI | OpenAPIv30x.OpenAPI) => Array<AjvSchemasIndex>

export type AjvValidatorsGenerator = (schema: OpenAPIv31x.OpenAPI | OpenAPIv30x.OpenAPI, type: 'request' | 'response' | 'both') => Promise<Array<AjvValidatorsIndex>>

export const ajvSchemasGenerator: AjvSchemasGenerator = (schema) => {
    const indexes: Array<AjvSchemasIndex> = []
    let schemas: Array<TypesV31xRequest.GeneratedSchema | TypesV31xResponses.GeneratedSchema | TypesV30xRequest.GeneratedSchema | TypesV30xResponses.GeneratedSchema> = []
    if (schema.openapi === '3.1.0') schemas = [...v31xRequestsSchemasGenerator(schema), ...v31xReponsesSchemasGenerator(schema)] 
    else if (['3.0.0', '3.0.1', '3.0.2', '3.0.3'].includes(schema.openapi)) schemas = [...v30xRequestsSchemasGenerator(schema), ...v30xReponsesSchemasGenerator(schema)]
    schemas.forEach(sch => {
        const index = sch.type + '+' + sch.path + '+' + sch.operation
        ajv.addSchema(sch.schema, index)
        indexes.push({ type: sch.type, path: sch.path, operation: sch.operation, index })
    })
    return indexes
}

export const ajvValidatorsGenerator: AjvValidatorsGenerator = async (schema, type) => {
    const validators: Array<AjvValidatorsIndex> = []
    let schemas = ajvSchemasGenerator(schema)
    if (['request', 'response'].includes(type)) schemas = schemas.filter(schema => schema.type === type)
    schemas.forEach(schema => {
        const validator = ajv.getSchema(schema.index)
        validators.push({ type: schema.type, path: schema.path, operation: schema.operation, validator })
    })
    return validators
}

// ----------------------------------------------------------------

export type GetPaths = (schema: OpenAPIv31x.OpenAPI) => Array<string>

export type GetPathOperations = (schema: OpenAPIv31x.OpenAPI, path: string) => Array<HttpMethod>

export const getPaths: GetPaths = (schema) => {
    if (!schema) throw new Error
    if (!schema.paths) return []
    else return Object.keys(schema.paths)
}

export const getPathOperations: GetPathOperations = (schema, path) => {
    if (!schema) throw new Error
    if (typeof schema !== 'object') throw new Error
    if (!path) throw new Error
    if (typeof path !== 'string') throw new Error
    if (!schema.paths) throw new Error
    if (typeof schema.paths !== 'object') throw new Error
    else if (typeof schema.paths[path] !== 'object') throw new Error
    else {
        const operations: Array<HttpMethod> = []
        const pathItem = schema.paths[path] 
        if (!pathItem) throw new Error
        Object.keys(pathItem).forEach((key) => {
            if (['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'].includes(key)) operations.push(key as HttpMethod)
        })
        return operations
    }
}