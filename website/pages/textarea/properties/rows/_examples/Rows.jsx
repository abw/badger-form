import React from 'react'
import { Form, Field } from '@/lib/index'

const RowsExample = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="Two rows"
      type="textarea"
      rows={2}
    />
    <Field
      name="two"
      label="Ten Rows"
      type="textarea"
      rows={10}
    />
  </Form>
  /* END */

export default RowsExample