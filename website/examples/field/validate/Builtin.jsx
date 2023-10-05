import { Form, Field, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const BuiltinValidation = () =>
  <Form className="width-16rem">
    <Field
      name="username"
      label="Username"
      help="Minimum length 3, maximum 11"
      wide
      required
      minLength={3}
      maxLength={{
        value: 11,
        message: 'These go up to eleven'
      }}
    />
    <ResetSubmit
      submit={{ className: 'blue' }}
      space
    />
  </Form>

export default BuiltinValidation