import { Form, Field, Reset } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/badger-form'

const DefaultExample = () =>
  <Form>
    <Field
      name="animal"
      label="Favourite animal"
      default="Badger"
    />
    <Reset/>
  </Form>

export default DefaultExample