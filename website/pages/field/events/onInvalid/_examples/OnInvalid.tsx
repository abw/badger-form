import { Form, Field, FieldContextFunction } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FieldContextFunction // TS type
// PRETEND: } from '@abw/badger-form'

const OnInvalidExample = () => {
  const [msg, setMsg] = useState<string>()

  const onInvalid: FieldContextFunction = field =>
    setMsg(`${field.label} is invalid: ${field.message}`)

  return (
    <Form validateOnBlur>
      <Field
        name="foo" label="Foo Field" required
        onInvalid={onInvalid}
      />
      <Field
        name="bar" label="Bar Field" required
        onValid={onInvalid}
        requiredMessage="You must enter a value"
      />
      {msg}
    </Form>
  )
}

export default OnInvalidExample