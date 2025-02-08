import React from 'react'
import { Form, Field, Submit } from '@/lib/index'

const SubmitText = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit text="Save Changes"/>
  </Form>
  /* END */

export default SubmitText