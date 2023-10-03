import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const taken = (values, { fail }) =>
  fail({
    errors: {
      username: `Sorry, ${values.username} is already taken`
    }
  })

const OnSubmitFail = () =>
  <Form onSubmit={taken}>
    <Field
      name="username"
      label="Pick a username"
      required
    />
    <Field
      name="password"
      label="Enter a password"
      required
    />
    <Submit/>
  </Form>

export default OnSubmitFail