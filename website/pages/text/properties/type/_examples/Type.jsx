import React from 'react'
import { Form, Field } from '@/lib/index'

const TypeExample = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="number"
      label="A number field"
    />
    <Field
      name="two"
      type="date"
      label="A date field"
    />
    <Field
      name="three"
      type="password"
      label="A password field"
    />
    <Field
      name="four"
      type="color"
      label="A color field"
    />
  </Form>
  /* END */

export default TypeExample