import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const FieldLabel = () =>
  <Form>
    <Field name="one" label="One"/>
    <Field name="two" label="Two"/>
  </Form>

export default FieldLabel