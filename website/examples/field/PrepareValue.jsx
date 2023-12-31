import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const PrepareValue = () =>
  <Form>
    <Field
      name="shout"
      label="Shout"
      prepareValue={value => value.toUpperCase()}
      wide
    />
    <Field
      type="textarea"
      name="shout-more"
      label="Shout more"
      prepareValue={value => value.toUpperCase()}
      wide
    />
    <Submit/>
  </Form>

export default PrepareValue