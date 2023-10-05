import { Form, Field, ResetSubmit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitSpace = () =>
  <Form className="width-20rem">
    <h2>Reset and Submit With Space</h2>
    <Field name="name"  label="Name"  wide/>
    <Field name="email" label="Email" wide/>
    <ResetSubmit space/>
  </Form>

export default ResetSubmitSpace
