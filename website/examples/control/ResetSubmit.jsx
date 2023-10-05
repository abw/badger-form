import { Form, Field, ResetSubmit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitForm = () =>
  <Form className="width-20rem">
    <h2>Reset and Submit</h2>
    <Field name="name"  label="Name"  wide/>
    <Field name="email" label="Email" wide/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitForm
