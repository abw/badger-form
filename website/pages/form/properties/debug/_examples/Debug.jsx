import { Form, Field, Submit } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const DebugExample = () =>
  <Form debug>
    <Field name="name" label="Name"/>
    <Field name="email" label="Email Address"/>
    <Submit/>
  </Form>

export default DebugExample