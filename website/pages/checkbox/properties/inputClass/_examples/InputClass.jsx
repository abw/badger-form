import React from 'react'
import { Form, Field } from '@/lib/index.js'

const InputClass = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="Big old checkbox"
      inputClass="larger"
    />
  </Form>
  /* END */

export default InputClass