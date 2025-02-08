import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index'

// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitClass = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit
      className="flex space pad-2 bgc-90 bgd-10 border bdr-2"
    />
  </Form>
  /* END */

export default ResetSubmitClass
