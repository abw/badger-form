import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required