import type { FromSchema, JSONSchema } from 'json-schema-to-ts'
import type { JSONResumeSchema } from './json-resume-schema'

type JSONResume = FromSchema<JSONResumeSchema>

export type { JSONResume }
