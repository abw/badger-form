import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const hello = values =>
  window.alert(`Hello ${values.name}!`)

const OnSubmit = () =>
  <Form onSubmit={hello}>
    <Field name="name" label="What is your name?" required/>
    <Submit/>
  </Form>

export default OnSubmit