import { Form, Field, Reset } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/badger-form'

const OnClickExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Reset onClick={() => alert('reset intercepted')}/>
  </Form>

export default OnClickExample