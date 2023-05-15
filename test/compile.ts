import assert from 'assert'
import { compile } from '../src'
import * as schemas from './specs/objects'
import schemaRetriever from 'openapi-schema-retriever'

context('Compile', () => {
    describe('returns an error', () => {
        it('when schema not provided', async () => {
            // Setup
            const expected = new Error('schema is not provided')
            // Exercise and verify
            await assert.rejects(async () => await compile(), expected)
        })
    })
    describe('return an array', () => {
        context('when schema is provided', () => {
            for (let i = 1; i <= 7; i++) {
                // if (i === 6) continue
                context(`for specification #${i}`, () => {
                    // Setup 
                    const expected = true
                    it.skip('as object', async () => {
                        // Setup
                        const schema = await schemaRetriever(schemas[`schema${i}`])
                        // Exercise 
                        const actual = Array.isArray(await compile(schema))
                        // Verify
                        assert.strictEqual(actual, expected)
                    })
                    it.skip('as json file', async () => {
                        // Setup
                        const schema = await schemaRetriever(`./specs/json/openapi${i}.json`, __dirname)
                        // Exercise 
                        const actual = Array.isArray(await compile(schema))
                        // Verify
                        assert.strictEqual(actual, expected)
                    })
                    it('as yaml file', async () => {
                        // Setup
                        const schema = await schemaRetriever(`./specs/yaml/openapi${i}.yaml`, __dirname)
                        // Exercise 
                        const actual = Array.isArray(await compile(schema))
                        // Verify
                        assert.strictEqual(actual, expected)
                    })
                })
            }
        })
    })
})