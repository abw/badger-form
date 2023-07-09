import { Form, Field, ResetSubmit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitForm = () =>
  <Form>
    <h2>Reset and Submit</h2>
    <Field name="name" label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitForm
