import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const TextExample = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset text="Undo Changes"/>
  </Form>
  /* END */

export default TextExample