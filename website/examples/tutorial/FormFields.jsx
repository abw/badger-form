import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const fields = {
  name: {
    label: 'Your name',
    required: true,
    messages: {
      required: 'You must enter your name'
    }
  },
  email: {
    label: 'Your email address',
    type: 'email',
    required: true,
    minLength: 3,
    messages: {
      required: 'You must enter your email address'
    }
  },
  password: {
    label: 'Choose a password',
    type: 'password',
    required: true,
    minLength: 6,
    help: 'Minimum 6 characters',
    messages: {
      required: 'You must choose a password',
      minLength: 'Your password must be 6 characters or more'
    }
  },
  terms: {
    type: 'checkbox',
    text: 'I accept the terms and conditions',
    required: true
  }
}

const FormFields = () =>
  <Form fields={fields}>
    <Field name="name"/>
    <Field name="email"/>
    <Field name="password"/>
    <Field name="terms"/>
    <Submit/>
  </Form>

export default FormFields