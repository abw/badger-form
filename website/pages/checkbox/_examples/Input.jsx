import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const InputExample = () =>
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="I like badgers"
    />
  </Form>

export default InputExample