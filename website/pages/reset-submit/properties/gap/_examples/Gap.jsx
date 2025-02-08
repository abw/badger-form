import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index'

const ResetSubmitGap = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit gap={8}/>
  </Form>
  /* END */

export default ResetSubmitGap
