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
        <div className="flex gap-4">
          <button
            className="green"
            onClick={
              e => {
                e.preventDefault();
                field?.setValue('Antelope')
              }
            }
          >
            Antelope
          </button>
          <button
            className="green"
            onClick={
              e => field?.setValue('Badger', e)
            }
          >
            Badger
          </button>
          <button
            type="button"
            className="green"
            onClick={
              () => field?.setValue('Camel')
            }
          >
            Camel
          </button>
          <button
            className="red"
            onClick={
              () => field?.setValue('Danger!')
            }
          >
            Danger!
          </button>
        </div>
      </Form>
    </>
  )
}

export default SetValueExample