import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const TextareaInputs = () =>
  <Form>
    <Field name="one" label="One" type="textarea"/>
    <Field name="two" label="Two" type="textarea" rows="10"/>
  </Form>

export default TextareaInputs