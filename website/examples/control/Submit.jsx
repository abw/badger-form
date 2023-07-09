import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FormWithSubmit = () =>
  <Form>
    <h2>Form With Submit</h2>
    <Field name="name" label="Name"/>
    <Field name="email" label="Email"/>
    <Submit/>
  </Form>

export default FormWithSubmit