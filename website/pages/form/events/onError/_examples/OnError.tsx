import { Form, Field, Submit, FormSubmitHandler, FormSubmitError } from '@/lib/index'
import { sleep } from '@abw/badger-utils'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FormSubmitHandler, FormSubmitError // TS types
// PRETEND: } from '@abw/badger-form'
// PRETEND: import { sleep } from '@abw/badger-utils'

const OnErrorExample = () => {
  const [msg, setMsg] = useState<string>()
  const onSubmit: FormSubmitHandler = async values => {
    await sleep(1000)
    return Promise.reject({
      error: `Dummy failed API call with foo: ${values.foo}`
    })
  }
  const onError = (response: FormSubmitError) => {
    setMsg(response.error)
  }

  return (
    <Form
      onSubmit={onSubmit}
      onError={onError}
    >
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      { msg &&
        <div className="error alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnErrorExample