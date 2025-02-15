import { Form, Field, Submit, FormSubmitResponse, FormSuccessHandler, FormSubmitHandler } from '@/lib/index'
import { sleep } from '@abw/badger-utils'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FormSubmitResponse, FormSuccessHandler, FormSubmitHandler // TS types
// PRETEND: } from '@abw/badger-form'
// PRETEND: import { sleep } from '@abw/badger-utils'

type MyResponse = FormSubmitResponse & {
  message: string
}

const OnSuccessExample = () => {
  const [msg, setMsg] = useState<string>()
  const onSubmit: FormSubmitHandler = async values => {
    await sleep(1000)
    return Promise.resolve({
      ok: true,
      message: `Dummy API call with foo: ${values.foo}`
    })
  }
  const onSuccess: FormSuccessHandler<MyResponse> = response => {
    setMsg(response.message)
  }

  return (
    <Form
      onSubmit={onSubmit}
      onSuccess={onSuccess as FormSuccessHandler}
    >
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

export default OnSuccessExample