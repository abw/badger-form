import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index.js'

const ResetSubmitSize = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit space size="small"/>
  </Form>
  /* END */

export default ResetSubmitSize
