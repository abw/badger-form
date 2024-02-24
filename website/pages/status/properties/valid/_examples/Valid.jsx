import React from 'react'
import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

const ValidatingExample = () =>
  /* START */
  <Form>
    <Field
      name="field1"
      label="Field One"
      required
    />
    <Status valid>
      <div className="success alert">
        The form is valid!
      </div>
    </Status>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ValidatingExample