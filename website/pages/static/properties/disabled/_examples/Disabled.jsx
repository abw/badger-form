import React from 'react'
import { Form, Field, Submit } from '@/lib/index'

const Disabled = () =>
  /* START */
  <Form>
    <Field
      name="name"
      type="static"
      value="Bobby Badger"
      label="Your name"
      disabled
    />
    <Field
      name="email"
      type="static"
      value="bobby@badgerpower.com"
      label="Your email address"
      disabled
    />
    <Field
      name="message"
      label="Message text"
      type="text"
    />
    <Submit/>
  </Form>
  /* END */

export default Disabled
