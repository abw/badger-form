import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const TypeExample = () =>
  <Form>
    <Field
      name="field1"
      label="Text Field"
    />
    <Field
      name="field2"
      type="textarea"
      label="TextArea Field"
    />
    <Field
      name="field3"
      type="number"
      label="Number Field"
    />
    <Field
      name="field4"
      type="date"
      label="Date Field"
    />
    <Field
      name="field5"
      type="select"
      label="Select Field"
      options={['Badger', 'Ferret', 'Stoat']}
    />
    <Field
      name="field6"
      type="radio"
      label="Radio Button Field"
      options={['No', 'Maybe', 'Yes']}
    />
    <Field
      name="field7"
      type="checkbox"
      label="Checkbox Field"
      text="I like badgers"
    />
  </Form>

export default TypeExample