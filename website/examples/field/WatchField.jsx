import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const WatchField = () =>
  <Form>
    <Field
      name="name" label="Your name"
      wide
    />
    <Field
      name="copycat"
      label="Your name is..."
      watchField="name"
      wide
    />
    <Submit/>
  </Form>

export default WatchField