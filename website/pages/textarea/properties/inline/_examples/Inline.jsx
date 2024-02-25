import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="An inline textarea field"
      type="textarea"
      inline
    />
  </Form>
  /* END */

export default Inline