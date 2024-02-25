import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="An inline text field"
      inline
    />
    <Field
      name="two"
      label="Same with prefix and suffix"
      prefix="£"
      suffix=".00"
      inline
    />
    <Field
      name="two"
      label="Default text field"
    />
  </Form>
  /* END */

export default Inline