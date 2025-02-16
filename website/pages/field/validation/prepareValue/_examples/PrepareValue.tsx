import { Form, Field, FieldValue } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FieldValue // TS type
// PRETEND: } from '@abw/badger-form'

const fields = {
  upper: {
    label: 'Converted to UPPER CASE',
    prepareValue: (value: FieldValue) =>
      String(value).toUpperCase()
  }
}

const PrepareValue = () =>
  <Form fields={fields}>
    <Field name="upper"/>
  </Form>

export default PrepareValue