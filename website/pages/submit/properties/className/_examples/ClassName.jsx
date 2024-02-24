import React from 'react'
import { Form, Field, Submit } from '@/lib/index.js'

const SubmitClassName = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="blue"/>
  </Form>
  /* END */

export default SubmitClassName