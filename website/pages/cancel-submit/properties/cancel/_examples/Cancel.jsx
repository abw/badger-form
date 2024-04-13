import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

const CancelSubmitExample = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit
      cancel={{
        className: 'outline',
        text: 'Undo Changes'
      }}
    />
  </Form>
  /* END */

export default CancelSubmitExample
