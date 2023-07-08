import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const fields = {
  username: {
    label: 'Username',
    required: true,
    size: 30,
  },
  email: {
    label: 'Email address',
    type: 'email',
    help: 'Must be the address you registered with',
    size: 30,
    required: true,
  }
}

const FieldName = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Field name="email"/>
    <Submit/>
  </Form>

export default FieldName