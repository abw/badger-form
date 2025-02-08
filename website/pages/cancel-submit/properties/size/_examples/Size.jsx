import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index'

const CancelSubmitSize = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit space size="small"/>
  </Form>
  /* END */

export default CancelSubmitSize
