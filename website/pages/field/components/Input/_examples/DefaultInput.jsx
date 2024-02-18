import { Form, Field, Input } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Input } from '@abw/badger-form'

const FormInput = () =>
  <Form>
    <Field name="one">
      <div className="field flex baseline gap-2">
        <label className="nowrap">Field Label</label>
        <Input/>
      </div>
    </Field>
  </Form>

export default FormInput