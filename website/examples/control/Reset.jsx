import { Form, Field, Reset } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/badger-form'

const values = {
  name:  'Bobby Badger',
  email: 'bobby@badgerpower.com',
  comment: ''
}

const FormWithReset = () =>
  <Form values={values} className="width-16rem">
    <h2>Form With Reset</h2>
    <Field name="name"    label="Name"    wide/>
    <Field name="email"   label="Email"   wide/>
    <Field name="comment" label="Comment" wide/>
    <Reset/>
  </Form>

export default FormWithReset
