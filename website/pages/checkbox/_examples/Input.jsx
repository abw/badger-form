import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const Checkbox = () =>
  <Form>
    <Field
      name="one"
      type="checkbox"
      label="Checkbox with label"
      text="I like badgers!"
    />
    <Field
      name="two"
      type="checkbox"
      text="I accept the terms and conditions"
    />
  </Form>

export default Checkbox
