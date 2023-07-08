import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const BasicLoginForm = () =>
  <Form>
    <h3>Login</h3>
    <Field name="email" label="Email Address" required/>
    <Field name="password" type="password" label="Password" required/>
    <Submit text="Login"/>
  </Form>

export default BasicLoginForm