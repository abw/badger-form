import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const existingUsers = {
  alice:   true,
  bob:     true,
  charlie: true,
}

const fields = {
  username: {
    label: 'Username',
    help:  'Choose a username (minimum length: 3)',
    validateOnChange: true,
    minValidateLength: 3,
    validate: (value, field, resolve, reject) => {
      if (value.length < 3) {
        reject({ message: 'Your username must be at least 3 characters' })
      }
      if (existingUsers[value.toLowerCase()]) {
        reject({ message: 'Sorry, that username is taken' })
      }
      else {
        resolve({ message: 'That username is available' })
      }
    }
  }
}

const MinValidateLengthExample = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Submit/>
  </Form>

export default MinValidateLengthExample