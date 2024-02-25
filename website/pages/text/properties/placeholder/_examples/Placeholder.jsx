import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Placeholder = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="Name"
      placeholder="Your name"
    />
  </Form>
  /* END */

export default Placeholder