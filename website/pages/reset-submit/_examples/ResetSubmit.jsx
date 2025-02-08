import { Form, Field, ResetSubmit } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitExample = () =>
  <Form>
    <Field name="name"  label="Name"  wide/>
    <Field name="email" label="Email" wide/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample
