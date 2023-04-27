import assert from 'assert'
import { compile } from '../src'
import * as specs from './specs/v31x/objects'
import { OpenAPIv31x } from 'openapi-objects-types'

describe('Validators Compilers', () => {
    context('with an openapi specification as object', () => {
        it('return an array (schema1)', async () => {
            // Setup
            const expected = true
            // Exercise
            const actual = await compile(specs.schema1 as OpenAPIv31x.OpenAPI, { type: 'both' })
            // Verify
            // console.log('validators:', actual)
            assert.strictEqual(Array.isArray(actual), expected)
        })
        it('return an array (schema2)', async () => {
            // Setup
            const expected = true
            // Exercise
            const actual = await compile(specs.schema2 as unknown as OpenAPIv31x.OpenAPI, { type: 'both' })
            // Verify
            // console.log('validators:', actual)
            assert.strictEqual(Array.isArray(actual), expected)
        })
        it('return an array (schema3)', async () => {
            // Setup
            const expected = true
            // Exercise
            const actual = await compile(specs.schema3 as unknown as OpenAPIv31x.OpenAPI, { type: 'both' })
            // Verify
            // console.log('validators:', actual)
            assert.strictEqual(Array.isArray(actual), expected)
        })
        it('return an array (schema4)', async () => {
            // Setup
            const expected = true
            // Exercise
            const actual = await compile(specs.schema4 as unknown as OpenAPIv31x.OpenAPI, { type: 'both' })
            // Verify
            // console.log('validators:', actual)
            assert.strictEqual(Array.isArray(actual), expected)
        })
        it('return an array (schema5)', async () => {
            // Setup
            const expected = true
            // Exercise
            const actual = await compile(specs.schema5 as unknown as OpenAPIv31x.OpenAPI, { type: 'both' })
            // Verify
            // console.log('validators:', actual)
            assert.strictEqual(Array.isArray(actual), expected)
        })
        it.skip('return an array (schema6)', async () => {
            // Setup
            const expected = true
            // Exercise
            const actual = await compile(specs.schema6 as unknown as OpenAPIv31x.OpenAPI, { type: 'both' })
            // Verify
            // console.log('validators:', actual)
            assert.strictEqual(Array.isArray(actual), expected)
        })
        it('return an array (schema7)', async () => {
            // Setup
            const expected = true
            // Exercise
            const actual = await compile(specs.schema7 as unknown as OpenAPIv31x.OpenAPI, { type: 'both' })
            // Verify
            // console.log('validators:', actual)
            assert.strictEqual(Array.isArray(actual), expected)
        })
    })
})

