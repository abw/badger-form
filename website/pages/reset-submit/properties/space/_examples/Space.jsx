import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index'

const ResetSubmitSpace = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ResetSubmitSpace
