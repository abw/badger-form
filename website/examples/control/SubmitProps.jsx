import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitProperties = () =>
  <Form>
    <h2>Submit Properties</h2>
    <Field name="name" label="Name"/>
    <Field name="email" label="Email"/>
    <Submit className="blue" text="Save"/>
  </Form>

export default SubmitProperties