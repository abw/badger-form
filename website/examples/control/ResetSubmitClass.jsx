import { Form, Field, ResetSubmit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitClass = () =>
  <Form className="wd-20">
    <h2>Reset and Submit Class</h2>
    <Field name="name" label="Name" wide/>
    <Field name="email" label="Email" wide/>
    <ResetSubmit
      className="flex space pad-2 bgc-90 bdr-2"
    />
  </Form>

export default ResetSubmitClass
