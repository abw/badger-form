import React from 'react'
import { Form, Field } from '@/lib/index'

const Placeholder = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="Summary"
      type="textarea"
      placeholder="Enter a summary"
    />
  </Form>
  /* END */

export default Placeholder