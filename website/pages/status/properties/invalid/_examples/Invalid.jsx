import React from 'react'
import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

const InvalidExample = () =>
  /* START */
  <Form>
    <Field
      name="field1"
      label="Field One"
      required
    />
    <Status invalid>
      <div className="warning alert">
        The form is invalid!
      </div>
    </Status>
    <ResetSubmit space/>
  </Form>
  /* END */

export default InvalidExample