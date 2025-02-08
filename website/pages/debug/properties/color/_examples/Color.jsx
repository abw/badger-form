import React from 'react'
import { Form, Field, Debug } from '@/lib/index'

const DebugForm = () =>
  /* START */
  <Form>
    <Field
      name="message"
      label="Message"
    />
    <Debug color="orange"/>
  </Form>
  /* END */

export default DebugForm