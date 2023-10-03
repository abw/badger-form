import { Form, Field, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const notA = value => {
  if (value.match(/^a/i)) {
    throw 'Username cannot start with a'
  }
  return true
}

const ValidateThrow = () =>
  <Form className="wd-16">
    <Field
      name="username"
      label="Username"
      help="Must NOT start with 'a'"
      wide
      required
      validate={notA}
    />
    <ResetSubmit
      submit={{ className: 'blue' }}
      space
    />
  </Form>

export default ValidateThrow