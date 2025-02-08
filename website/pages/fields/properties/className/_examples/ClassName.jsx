import { Form, Fields } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  name: {
    label: 'Name',
    required: true,
  },
  email: {
    label: 'Email Address',
    required: true,
  },
}

const ClassNameExample = () =>
  <Form fields={fields}>
    <Fields
      names="name email"
      className="border pad-4 bgc-95 bgd-5 bdr-2"
    />
  </Form>

export default ClassNameExample
