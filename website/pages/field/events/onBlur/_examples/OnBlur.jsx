import { Form, Field } from '@/lib/index'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnBlurExample = () => {
  const [msg, setMsg] = useState()
  const onBlur = field =>
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