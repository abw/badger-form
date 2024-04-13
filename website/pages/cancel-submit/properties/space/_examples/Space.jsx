import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

const ResetSubmitSpace = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit space/>
  </Form>
  /* END */

export default ResetSubmitSpace
