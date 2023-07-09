import { Form, Field, Reset } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/badger-form'

const values = {
  name:  'Bobby Badger',
  email: 'bobby@badgerpower.com'
}

const FormWithReset = () =>
  <Form values={values}>
    <h2>Form With Reset</h2>
    <Field name="name" label="Name"/>
    <Field name="email" label="Email"/>
    <Reset/>
  </Form>

export default FormWithReset
