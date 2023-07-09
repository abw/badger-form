import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const FormWithFields = () =>
  <Form>
    <h2>Form With Fields</h2>
    <Field name="one"/>
    <Field name="two"/>
  </Form>

export default FormWithFields