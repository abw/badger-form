import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const Checkbox = () =>
  <Form debug>
    <Field
      name="one"
      type="checkbox"
      label="Checkbox with label"
      default={true}
      text="I like badgers!"
    />
    <Field
      name="two"
      type="checkbox"
      text="I accept the terms and conditions"
    />
    <Submit/>
  </Form>

export default Checkbox
