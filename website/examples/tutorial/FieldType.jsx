import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FieldType = () =>
  <Form>
    <Field
      name="email" type="email" required
    />
    <Field
      name="password" type="password" required
    />
    <Field
      name="terms" type="checkbox" required
      text="I agree to the terms and conditions"
    />
    <Submit/>
  </Form>

export default FieldType