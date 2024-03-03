import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Text = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="Checkbox with some text"
    />
  </Form>
  /* END */

export default Text