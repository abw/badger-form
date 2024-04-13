import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

const CancelSubmitGap = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit gap={8}/>
  </Form>
  /* END */

export default CancelSubmitGap
