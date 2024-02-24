import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const ErrorsExample = () =>
  /* START */
  <Form
    onSubmit={
      () => {
        throw 'This is a simulated server error'
      }
    }
  >
    <Field name="field1" label="Field One"/>
    <Errors title="Oh Noes!"/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ErrorsExample