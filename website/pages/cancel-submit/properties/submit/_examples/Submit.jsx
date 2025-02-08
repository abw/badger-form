import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index'

const CancelSubmitExample = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit
      submit={{
        className: 'blue',
        text: 'Save'
      }}
    />
  </Form>
  /* END */

export default CancelSubmitExample
