import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const ErrorsExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One" required/>
    <Field name="field2" label="Field Two" required/>
    <Errors fieldErrors prompt="Oopsies!  Please try again."/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ErrorsExample