import { Form, Field } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OptionalLabel = () =>
  <Form showOptional optionalLabel="Not required">
    <Field
      name="field1"
      label="Optional Field"
    />
    <Field
      name="field2"
      label="Another Optional Field"
      optionalLabel="Nice to have"
    />
  </Form>

export default OptionalLabel