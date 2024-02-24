import React from 'react'
import { Form, Field, Debug } from '@/lib/index.js'

const DebugForm = () =>
  /* START */
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
  /* END */

export default DebugForm