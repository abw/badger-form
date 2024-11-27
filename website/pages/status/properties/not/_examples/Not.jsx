import React from 'react'
import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

const NotExample = () =>
  /* START */
  <Form
    onSubmit={ () => ({ ok: true }) }
  >
    <Field
      name="field1"
      label="Field One"
      required
    />
    <Status not changed>
      <div className="info alert">
        The form has not been changed.
      </div>
    </Status>
    <Status changed>
      <ResetSubmit space/>
    </Status>
  </Form>
  /* END */

export default NotExample