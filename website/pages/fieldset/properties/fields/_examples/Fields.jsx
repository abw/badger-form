import React from 'react'
import { Form, Fieldset } from '@/lib/index.js'

/* START */
const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
}

const FieldsetFieldsExample = () =>
  <Form fields={fields}>
    <Fieldset
      legend="Fieldset Two"
      fields="name message"
    />
  </Form>

export default FieldsetFieldsExample
