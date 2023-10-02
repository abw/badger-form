import { Form, Field, Fields, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Fields, Submit } from '@abw/badger-form'

const fields = {
  name: {
    label: 'Name',
    required: true,
  },
  email: {
    label: 'Email Address',
    required: true,
  },
  terms: {
    type: 'checkbox',
    text: 'I accept the terms and conditions',
    required: true,
  }
}

const FormWithFields = () =>
  <Form fields={fields}>
    <h2>Fields in a Grid</h2>
    <Fields names="name email" grid={2} wide/>
    <Field name="terms"/>
    <Submit/>
  </Form>

export default FormWithFields
