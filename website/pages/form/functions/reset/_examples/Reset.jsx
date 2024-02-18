import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const ResetExample = () =>
  <Form>
    <Field name="color"  label="Color"/>
    <Field name="animal" label="Animal"/>
    { form =>
      <button onClick={form.reset}>
        Reset
      </button>
    }
  </Form>

export default ResetExample