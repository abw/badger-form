import { Form, Field } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const FieldHelp = () =>
  <Form>
    <Field name="one" help="The first number"/>
    <Field name="two" help="The second number"/>
  </Form>

export default FieldHelp