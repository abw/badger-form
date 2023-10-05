import { Form, Field, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const notA = (value) => {
  return value.match(/^a/i)
    ? Promise.reject({ message: 'Username cannot start with a' })
    : Promise.resolve({ message: 'Noice!' })
}

const ValidatePromise = () =>
  <Form className="width-16rem">
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

export default ValidatePromise