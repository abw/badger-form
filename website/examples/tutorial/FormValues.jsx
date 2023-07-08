import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const values = {
  username: 'Bobby Badger',
  email:    'bobby@badgerpower.com'
}

const FormValues = () =>
  <Form values={values}>
    <Field name="username" label="Username"/>
    <Field name="email" label="Email"/>
    <Submit/>
  </Form>

export default FormValues