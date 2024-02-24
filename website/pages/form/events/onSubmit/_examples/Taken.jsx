import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const taken = values =>
  Promise.reject({
    errors: {
      username: `Sorry, ${values.username} is already taken`
    }
  })

const OnSubmitFail = () =>
  <Form onSubmit={taken} debug>
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
    <Errors fieldErrors/>
    <Submit/>
  </Form>

export default OnSubmitFail