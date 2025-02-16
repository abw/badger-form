import { Form, Field, FieldContextItems } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FieldContextItems // TS type
// PRETEND: } from '@abw/badger-form'

const ResetExample = () => {
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
          value="Initial value"
          name="field2"
          label="Field Two"
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="blue"
          onClick={field1?.reset}
        >
          Reset Field One
        </button>
        <button
          className="blue"
          onClick={field2?.reset}
        >
          Reset Field Two
        </button>
      </div>
    </>
  )
}

export default ResetExample