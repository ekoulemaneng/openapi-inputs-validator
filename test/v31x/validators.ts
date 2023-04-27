import assert from 'assert'
import { ajvValidatorsGenerator } from '../../src/validators'
import { OpenAPIv31x } from 'openapi-objects-types'
import { Resolver } from '@stoplight/json-ref-resolver'
import * as specs from '../specs/v31x/objects'

const resolver = new Resolver()

describe('ajvValidatorsGenerator', async () => {
    context('should generate', async () => {
        it('an array of objects from the openapi spec 1', async () => {
            // Setup
            const schemaResolved = await resolver.resolve(specs.schema1)
            const expected = true
            // Exercise
            const validators = await ajvValidatorsGenerator(JSON.parse(JSON.stringify(schemaResolved.result)) as OpenAPIv31x.OpenAPI, 'request')
            // Evaluate
            console.log('validators:', validators)
            assert.ok(Array.isArray(validators) === expected)
        })
        it('an array of objects from the openapi spec 2', async () => {
            // Setup
            const schemaResolved = await resolver.resolve(specs.schema2)
            const expected = true
            // Exercise
            const validators = await ajvValidatorsGenerator(JSON.parse(JSON.stringify(schemaResolved.result)) as OpenAPIv31x.OpenAPI, 'request')
            // Evaluate
            console.log('validators:', validators)
            assert.ok(Array.isArray(validators) === expected)
        })
        it('an array of objects from the openapi spec 3', async () => {
            // Setup
            const schemaResolved = await resolver.resolve(specs.schema3)
            const expected = true
            // Exercise
            const validators = await ajvValidatorsGenerator(JSON.parse(JSON.stringify(schemaResolved.result)) as OpenAPIv31x.OpenAPI, 'request')
            // Evaluate
            console.log('validators:', validators)
            assert.ok(Array.isArray(validators) === expected)
        })
        it('an array of objects from the openapi spec 4', async () => {
            // Setup
            const schemaResolved = await resolver.resolve(specs.schema4)
            const expected = true
            // Exercise
            const validators = await ajvValidatorsGenerator(JSON.parse(JSON.stringify(schemaResolved.result)) as OpenAPIv31x.OpenAPI, 'request')
            // Evaluate
            console.log('validators:', validators)
            assert.ok(Array.isArray(validators) === expected)
        })
        it('an array of objects from the openapi spec 5', async () => {
            // Setup
            const schemaResolved = await resolver.resolve(specs.schema5)
            const expected = true
            // Exercise
            const validators = await ajvValidatorsGenerator(JSON.parse(JSON.stringify(schemaResolved.result)) as OpenAPIv31x.OpenAPI, 'request')
            // Evaluate
            console.log('validators:', validators)
            assert.ok(Array.isArray(validators) === expected)
        })
        it('an array of objects from the openapi spec 6', async () => {
            // Setup
            const schemaResolved = await resolver.resolve(specs.schema6)
            const expected = true
            // Exercise
            const validators = await ajvValidatorsGenerator(JSON.parse(JSON.stringify(schemaResolved.result)) as OpenAPIv31x.OpenAPI, 'request')
            // Evaluate
            console.log('validators:', validators)
            assert.ok(Array.isArray(validators) === expected)
        })
        it('an array of objects from the openapi spec 7', async () => {
            // Setup
            const schemaResolved = await resolver.resolve(specs.schema7)
            const expected = true
            // Exercise
            const validators = await ajvValidatorsGenerator(JSON.parse(JSON.stringify(schemaResolved.result)) as OpenAPIv31x.OpenAPI, 'request')
            // Evaluate
            console.log('validators:', validators)
            assert.ok(Array.isArray(validators) === expected)
        })
    })
})