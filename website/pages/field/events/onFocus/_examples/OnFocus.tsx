import { Form, Field, FieldContextFunction } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FieldContextFunction // TS type
// PRETEND: } from '@abw/badger-form'

const OnFocusExample = () => {
  const [msg, setMsg] = useState<string>()

  const onFocus: FieldContextFunction = field =>
    setMsg(`${field.label} was focussed`)

  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onFocus={onFocus}
      />
      <Field
        name="bar" label="The Bar Field"
        onFocus={onFocus}
      />
      {msg}
    </Form>
  )
}

export default OnFocusExample