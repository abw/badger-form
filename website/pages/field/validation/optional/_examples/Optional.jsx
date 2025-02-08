import { Form, Field, Submit } from '@/lib/index'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const validate = value => yup
  .string()
  .trim()
  .min(3, 'If you enter a value it must be 3 characters or more')
  .validate(value)

const Required = () =>
  <Form showOptional>
    <Field
      name="field1"
      label="This must have a value"
      validate={validate}
    />
    <Field
      name="field2"
      label="This may have a value"
      validate={validate}
      optional
    />
    <Submit/>
  </Form>

export default Required