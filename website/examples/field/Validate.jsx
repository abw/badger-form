import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const notA = value => {
  if (value.match(/^a/i)) {
    // return Promise.reject(`Username cannot start with a`)
    return 'Username cannot start with a'
  }
  return true
}

const Validate = () =>
  <Form>
    <Field
      name="username"
      label="Username"
      help="Must NOT start with 'a'"
      Xvalidate={ value => ! value.match(/^a/i) }
      validate={notA}
    />
    <Submit/>
  </Form>

export default Validate