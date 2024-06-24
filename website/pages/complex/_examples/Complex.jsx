import { Form, Field, Complex, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Complex } from '@abw/badger-form'

const ComplexExample = () =>
  <Form>
    <Complex name="user">
      <Field name="name" label="Name"/>
      <Field name="email" label="Email"/>
    </Complex>
    <Debug/>
  </Form>

export default ComplexExample