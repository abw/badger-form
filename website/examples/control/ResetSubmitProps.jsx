import { Form, Field, ResetSubmit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitForm = () =>
  <Form className="width-20rem">
    <h2>Reset and Submit Properties</h2>
    <Field name="name"  label="Name"  wide/>
    <Field name="email" label="Email" wide/>
    <ResetSubmit
      space={true}
      reset={{ className: 'outline', text: 'Undo' }}
      submit={{ className: 'blue', text: 'Save' }}
    />
  </Form>

export default ResetSubmitForm
