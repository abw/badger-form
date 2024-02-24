import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const doubleFail = values =>
  Promise.reject({
    errors: [
      {
        name:    'username',
        message: `Sorry, ${values.username} is already taken`
      },
      {
        // 'field' is an alias for 'name'
        field: 'password',
        // 'error' is an alias for 'message'
        error: 'Your password is too easy to guess'
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
    <Errors fieldErrors/>
    <Submit/>
  </Form>

export default OnSubmitErrors