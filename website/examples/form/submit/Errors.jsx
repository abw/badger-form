import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const doubleFail = (values, { fail }) =>
  fail({
    errors: [
      {
        field: 'username',
        error: `Sorry, ${values.username} is already taken`
      },
      {
        // 'name' is an alias for 'field'
        name: 'password',
        // 'message' is an alias for 'error'
        message: `Your password is too easy to guess`
      }
    ]
  })

const OnSubmitErrors = () =>
  <Form onSubmit={doubleFail}>
    <Field
      name="username"
      label="Pick a username"
      required
    />
    <Field
      name="password"
      label="Choose a password"
      type="password"
      required
    />
    <Submit/>
  </Form>

export default OnSubmitErrors