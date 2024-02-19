import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Submit } from '@abw/badger-form'

const fields = {
  one: {
    label: 'One',
  },
  two: {
    label: 'Two',
  },
  three: {
    label: 'Three',
  }
}

const FieldsGridAutoExample = () =>
  <Form fields={fields}>
    <Fields names="one two three" grid/>
  </Form>

export default FieldsGridAutoExample
