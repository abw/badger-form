import React from 'react'
import { Form, Field } from '@/lib/index'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="Inline checkbox"
      inline
    />
    <Field
      name="two"
      type="checkbox"
      text="Inline checkbox with border"
      border
      inline
    />
  </Form>
  /* END */

export default Inline