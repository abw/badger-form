import { Form, Field, Layout } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/badger-form'

const FormLayout = () =>
  <Form>
    <Field
      name="one"
      label="Field One"
      help="This has implicit layout"
    />
    <Field
      name="two"
      label="Field Two"
      help="This has explicit layout"
    >
      <Layout/>
    </Field>
  </Form>

export default FormLayout