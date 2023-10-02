import { Form, Fields, Submit } from '../../../lib/index.js'

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

const FormWithFields = () =>
  <Form fields={fields}>
    <h2>Fields in a Grid</h2>
    <Fields names="one two three" grid={true} wide/>
    <Submit/>
  </Form>

export default FormWithFields
