import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SelectInput = () =>
  <Form>
    <Field
      name="food"
      type="select"
      label="What is your favourite number?"
      placeholder="Pick a number"
      options={[
        { value: 11, text: 'Eleven' },
        { value: 42, text: 'Forty-Two' },
        { value: 69, text: 'Sixty nine, dude!' }
      ]}
    />
  </Form>

export default SelectInput
