import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="A switch"
      switch
    />
    <Field
      name="two"
      type="checkbox"
      text="A round switch"
      round switch
    />
    <Field
      name="three"
      type="checkbox"
      text="A square switch"
      square switch
    />
  </Form>
  /* END */

export default Inline