import { Form, Field, Submit, FieldValues } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FieldValues // TS type
// PRETEND: } from '@abw/badger-form'

const OnSubmitExample = () => {
  const [msg, setMsg] = useState<string>()
  const onSubmit = (values: FieldValues) => {
    setMsg(`Form submitted, foo is ${values.foo}`)
    return { ok: true }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      { msg &&
        <div className="info alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnSubmitExample