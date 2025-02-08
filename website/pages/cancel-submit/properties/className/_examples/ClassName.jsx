import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index'

// PRETEND: import { Form, Field, CancelSubmit } from '@abw/badger-form'

const CancelSubmitClass = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit
      className="flex space pad-2 bgc-90 bgd-10 border bdr-2"
    />
  </Form>
  /* END */

export default CancelSubmitClass
