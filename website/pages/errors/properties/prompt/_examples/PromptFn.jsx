import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const TitleFnExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One" required/>
    <Field name="field2" label="Field Two" required/>
    <Errors
      fieldErrors
      prompt={
        n => n === 1
          ? 'There is a single error'
          : `There are ${n} errors`
      }
    />
    <ResetSubmit space/>
  </Form>
  /* END */

export default TitleFnExample