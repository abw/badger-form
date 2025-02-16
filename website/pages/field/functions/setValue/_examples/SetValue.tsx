import { Form, Field, FieldContextItems } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FieldContextItems // TS type
// PRETEND: } from '@abw/badger-form'

const SetValueExample = () => {
  const [field, setField] = useState<FieldContextItems>()

  return (
    <>
      <Form>
        <Field
          onLoad={setField}
          name="animal"
          label="Animal"
        />
      </Form>
      <div className="flex gap-4">
        <button
          onClick={ () => field?.setValue('Antelope') }
        >
          Antelope
        </button>
        <button
          onClick={ () => field?.setValue('Badger') }
        >
          Badger
        </button>
        <button
          onClick={ () => field?.setValue('Camel') }
        >
          Camel
        </button>
      </div>
    </>
  )
}

export default SetValueExample