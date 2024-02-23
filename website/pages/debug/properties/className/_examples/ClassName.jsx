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
      className="blue surface-4 border bdr-2 pad-2"
    />
  </Form>

export default DebugForm