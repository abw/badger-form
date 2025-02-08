import { Form, Field } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const ShowRequiredForm = () =>
  <Form showRequired>
    <Field
      name="field1"
      label="Required Field"
      required
    />
    <Field
      name="field2"
      label="Optional Field"
    />
  </Form>

export default ShowRequiredForm