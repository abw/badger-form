import { Form, Field, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ValidateFunction = () =>
  <Form className="width-16rem">
    <Field
      name="username"
      label="Username"
      help="Must NOT start with 'a'"
      wide
      required
      validate={ value => ! value.match(/^a/i) }
    />
    <ResetSubmit
      submit={{ className: 'blue' }}
      space
    />
  </Form>

export default ValidateFunction