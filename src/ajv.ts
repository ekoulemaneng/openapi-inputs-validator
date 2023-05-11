import Ajv, { Format, KeywordDefinition } from 'ajv'
import addFormats from "ajv-formats"

export const ajv = new Ajv({ useDefaults: true, coerceTypes: true, allErrors: true, strict: true })

addFormats(ajv)

export const addNewFormats = (formats: Record<string, Format>) => {
    if (typeof formats !== 'undefined' && typeof formats === 'object') {
        for (const name in formats) {
            const format = formats[name]
            if (format) ajv.addFormat(name, format)
        }
    }
}

export const addKeywords = (keywords: Array<string | KeywordDefinition>) => {
    if (typeof keywords !== 'undefined') keywords.forEach(keyword => ajv.addKeyword(keyword))
}