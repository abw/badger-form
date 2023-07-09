import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const CheckboxInputs = () =>
  <Form>
    <Field
      name="badgers" label="Do you like badgers?" type="checkbox"
      text="Yes"
    />
    <Field
      name="badgers" type="checkbox"
      text="I like badgers"
    />
    <Field
      name="ferrets" type="checkbox" border
      text="I like ferrets"
    />
  </Form>

export default CheckboxInputs