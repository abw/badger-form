import { Form, Field, FieldContextItems } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FieldContextItems // TS type
// PRETEND: } from '@abw/badger-form'

const SetInvalidExample = () => {
  const [field1, setField1] = useState<FieldContextItems>()
  const [field2, setField2] = useState<FieldContextItems>()

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1"
          label="Field One"
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="red"
          onClick={
            () => field1?.setInvalid()
          }
        >
          Invalid Field One
        </button>
        <button
          className="red"
          onClick={
            () => field2?.setInvalid('Naughty!')
          }
        >
          Invalid Field Two
        </button>
      </div>
    </>
  )
}

export default SetInvalidExample