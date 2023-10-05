import { Form, Field, Reset } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/badger-form'

const values = {
  name:  'Bobby Badger',
  email: 'bobby@badgerpower.com'
}

const ResetProperties = () =>
  <Form values={values} className="width-16rem">
    <h2>Reset Properties</h2>
    <Field name="name"  label="Name"  wide/>
    <Field name="email" label="Email" wide/>
    <Reset className="outline" text="Undo"/>
  </Form>

export default ResetProperties
