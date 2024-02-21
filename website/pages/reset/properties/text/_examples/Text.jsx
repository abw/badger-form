import { Form, Field, Reset } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/badger-form'

const TextExample = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset text="Undo Changes"/>
  </Form>

export default TextExample