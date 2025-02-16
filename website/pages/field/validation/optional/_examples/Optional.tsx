import { Form, Field, Submit, FieldValue } from '@/lib/index'

{/* START */}
import * as yup  from 'yup'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FieldValue // TS type
// PRETEND: } from '@abw/badger-form'

const validate = (value: FieldValue) => yup
  .string()
  .trim()
  .min(3, 'The value it must be 3 characters or more')
  .validate(value)

const Required = () =>
  <Form showRequired showOptional>
    <Field
      name="field1"
      label="This must have a value"
      validate={validate}
      required
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