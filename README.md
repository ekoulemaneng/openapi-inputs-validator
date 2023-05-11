# OpenAPI Inputs Validator
An unopinionated TypeScript library that provides inputs data validators in compliance with a given OpenAPI specification. For 3.1.x and 3.0.x OpenAPI versions.

## Installation

```
npm install openapi-inputs-validator
```
or 
```
yarn add openapi-inputs-validator
```

## Usage

```typescript
import schemaRetriever from 'openapi-schema-retriever'
import { compile, validate } from 'openapi-inputs-validator'

async function main() {

    // Setup an openapi specification
    const schema = await schemaRetriever('./openapi.yaml', __dirname)

    // Generate validators from an openapi specification
    const validators = await compile(schema)

    // Set parameters
    const path = '/users'
    const operation = 'get'
    const inputs = {
        path: {
            // ........
        },
        headers: {
            // .......
        },
        cookies: {
            // .......
        },
        query: {
            // .......
        },
        body: // ......
    }

    // Validate
    const validationResult = validate(path, operation, inputs, validators)

    console.log(validationResult) // => { valid: boolean, errors: null | string | {...} | undefined }

}
```

## License
This package is licensed under the [MIT License](https://opensource.org/licenses/mit).

## Contact
If you have any questions or issues, please contact the package maintainer at ekoulemaneng@gmail.com.