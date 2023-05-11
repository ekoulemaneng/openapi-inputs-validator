import { ajv } from './ajv'
import { AnyValidateFunction } from 'ajv/dist/core'
import schemasGenerator from './parser/schemas'
import { HttpMethod, OpenAPI } from './parser/types'

export type AjvSchemasIndex = {
    path: string 
    operation: HttpMethod 
    contentType?: string
    index: string
}

export type AjvValidatorsIndex = {
    path: string 
    operation: HttpMethod 
    contentType?: string
    validator: AnyValidateFunction | undefined
}

export type AjvSchemasGenerator = (schema: OpenAPI) => Array<AjvSchemasIndex>

export type AjvValidatorsGenerator = (schema: OpenAPI) => Promise<Array<AjvValidatorsIndex>>

export const ajvSchemasGenerator: AjvSchemasGenerator = (schema) => {
    const indexes: Array<AjvSchemasIndex> = []
    let schemas = schemasGenerator(schema)
    schemas.forEach(sch => {
        const index = sch.contentType ? sch.path + '+' + sch.operation + '+' + sch.contentType : sch.path + '+' + sch.operation
        ajv.addSchema(sch.schema, index)
        indexes.push({ path: sch.path, operation: sch.operation, contentType: sch.contentType, index })
    })
    return indexes
}

export const ajvValidatorsGenerator: AjvValidatorsGenerator = async (schema) => {
    const validators: Array<AjvValidatorsIndex> = []
    let schemas = ajvSchemasGenerator(schema)
    schemas.forEach(schema => {
        const validator = ajv.getSchema(schema.index)
        validators.push({ path: schema.path, operation: schema.operation, contentType: schema.contentType, validator })
    })
    return validators
}