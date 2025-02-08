import React from 'react'
import { Form, Field, Reset } from '@/lib/index'

const ClassNameExample = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset className="outline"/>
  </Form>
  /* END */

export default ClassNameExample