import { Form, Field } from '@/lib/index'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnValidExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form validateOnBlur>
      <Field
        name="foo" label="Foo Field" required
        onValid={field => setMsg(`${field.name} is valid: ${field.value}`)}
      />
      <Field
        name="bar" label="Bar Field" required
        onValid={field => setMsg(`${field.name} is valid: ${field.value}`)}
      />
      {msg}
    </Form>
  )
}

export default OnValidExample