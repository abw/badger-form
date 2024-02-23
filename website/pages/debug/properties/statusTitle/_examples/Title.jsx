import { Form, Field, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/badger-form'

const DebugForm = () =>
  <Form>
    <Field
      name="message"
      label="Message"
    />
    <Debug
      status
      statusTitle="Le Status"
      values={false}
    />
  </Form>

export default DebugForm