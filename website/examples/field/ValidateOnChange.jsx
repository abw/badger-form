import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const ValidateOnChange = () =>
  <Form>
    <Field
      name="username"
      label="Username"
      help="Must NOT start with 'a'"
      validateOnChange={ value => ! value.match(/^a/i) }
    />
    <Submit/>
  </Form>

export default ValidateOnChange