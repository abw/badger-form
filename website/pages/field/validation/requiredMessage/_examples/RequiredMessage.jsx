import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const RequiredLabel = () =>
  <Form requiredMessage="Nothing will come of nothing">
    <Field
      name="foo" label="Foo" required
    />
    <Field
      name="bar" label="Bar" required
      requiredMessage="You really MUST enter a value"
    />
    <Submit/>
  </Form>

export default RequiredLabel