import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index.js'

const ResetSubmitExample = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit
      reset={{
        className: 'outline',
        text: 'Undo Changes'
      }}
    />
  </Form>
  /* END */

export default ResetSubmitExample
