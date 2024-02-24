import React from 'react'
import { Form, Field, Status, Reset } from '@/lib/index.js'

const ChangedExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One"/>
    <Status changed>
      <div className="info alert">
        The form has changed!
      </div>
      <Reset/>
    </Status>
  </Form>
  /* END */

export default ChangedExample