import React from 'react'
import { Form, Field, Fieldset } from '@/lib/index'

const FieldsetExample = () =>
  /* START */
  <Form>
    <Fieldset legend="Fieldset One">
      <Field name="one" label="Field One"/>
      <Field name="one" label="Field Two"/>
    </Fieldset>
  </Form>
  /* END */

export default FieldsetExample
