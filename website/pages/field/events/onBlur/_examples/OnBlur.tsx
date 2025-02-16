import { Form, Field, FieldContextFunction } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FieldContextFunction // TS type
// PRETEND: } from '@abw/badger-form'

const OnBlurExample = () => {
  const [msg, setMsg] = useState<string>()

  const onBlur: FieldContextFunction = field =>
    setMsg(`${field.label} was blurred`)

  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onBlur={onBlur}
      />
      <Field
        name="bar" label="The Bar Field"
        onBlur={onBlur}
      />
      {msg}
    </Form>
  )
}
export default OnBlurExample