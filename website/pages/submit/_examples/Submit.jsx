import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitExample = () =>
  <Form onSubmit={() => alert('Form was submitted')}>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample