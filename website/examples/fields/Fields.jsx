import { Form, Fields, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Submit } from '@abw/badger-form'

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
  <Form fields={fields} className="wd-20">
    <h2>Form With Fields</h2>
    <Fields names="name email terms" wide/>
    <Submit/>
  </Form>

export default FormWithFields
