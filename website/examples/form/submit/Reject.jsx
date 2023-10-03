import { Form, Field, Submit, Errors } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const fire = () =>
  Promise.reject({
    error: `Invalid username or password`,
  })

const OnSubmitReject = () =>
  <Form onSubmit={fire}>
    <Field
      name="username"
      label="Username"
      required
    />
    <Field
      name="password"
      label="Password"
      type="password"
      required
    />
    <Errors/>
    <Submit/>
  </Form>

export default OnSubmitReject