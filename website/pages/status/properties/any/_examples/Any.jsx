import React from 'react'
import { Form, Field, Status, ResetSubmit, Debug } from '@/lib/index.js'

const AnyExample = () =>
  /* START */
  <Form
    onSubmit={ () => ({ ok: true }) }
  >
    <Field
      name="field1"
      label="Field One"
      required
    />
    <Status any valid invalid>
      <div className="info alert">
        Validation is complete
      </div>
    </Status>
    <ResetSubmit space/>
    <Debug status/>
  </Form>
  /* END */

export default AnyExample