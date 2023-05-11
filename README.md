# OpenAPI IO Validator
An unopinionated TypeScript library that provides inputs and outputs data validators in accordance with a given OpenAPI specification. For 3.1.x and 3.0.x OpenAPI versions.

## Installation

```
npm install openapi-io-validator 
```
or 
```
yarn add openapi-io-validator
```

## Usage

### Input request validation

```typescript
import { compile, validateRequest, validateResponse } from 'openapi-io-validator'

async function main() {

    // Setup an openapi specification
    const schema = {
        openapi: '3.0.2',
        // ...........
    }

    // Generate validators from an openapi specification
    const validators = await compile(schema, { type: 'both' })

    // Set parameters
    const path = '/products'
    const operation = 'get'
    const inputs = {
        path: {
            // ........
        },
        header: {
            // .......
        },
        cookie: {
            // .......
        },
        query: {
            // .......
        },
        body: // ......
    }

    // Validate
    const requestValidation = validateRequest(path, operation, inputs, validators)

    // Handle result
    if (requestValidation) {
        // .........
    }
    else {
        console.log(requestValidation.errors)
        // .......
    }

}
```

### Output response validation

```typescript
import { compile, validateResponse } from 'openapi-io-validator'

async function main() {

    // Setup an openapi specification
    const schema = {
        openapi: '3.0.2',
        // ...........
    }

    // Generate validators from an openapi specification
    const validators = await compile(schema, { type: 'response' })
    // Set parameters
    const path = '/products'
    const operation = 'get'
    const outputs = {
        statusCode: '200',
        headers: {
            // .......
        },
        content: // ......
    }

    // Validate
    const responseValidation = validateResponse(path, operation, inputs, validators)

    // Handle result
    if (responsesValidation) {
        // .........
    }
    else {
        console.log(responseValidation.errors)
        // .......
    }

}
```

## License
This package is licensed under the [MIT License](https://opensource.org/licenses/mit).

## Contact
If you have any questions or issues, please contact the package maintainer at ekoulemaneng@gmail.com.
