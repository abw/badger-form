import { Form, Field, ResetSubmit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitForm = () =>
  <Form className="wd-20">
    <h2>Reset and Submit Properties</h2>
    <Field name="name" label="Name" wide/>
    <Field name="email" label="Email" wide/>
    <ResetSubmit
      className="flex space"
      reset={{ className: 'outline', text: 'Undo' }}
      submit={{ className: 'blue', text: 'Save' }}
    />
  </Form>

export default ResetSubmitForm
