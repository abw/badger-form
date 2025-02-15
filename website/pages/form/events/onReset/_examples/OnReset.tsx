import { Form, Field, Reset } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const OnResetExample = () => {
  const [msg, setMsg] = useState<string>()

  return (
    <Form
      onReset={
        () => setMsg(`The form was reset`)
      }
    >
      <Field name="foo" label="Foo Field"/>
      <Reset/>
      { msg &&
        <div className="info alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnResetExample