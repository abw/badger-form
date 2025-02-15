import { Form, Field, FormObject } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FormObject // TS type
// PRETEND: } from '@abw/badger-form'

const SetValues = () => {
  const [form, setForm] = useState<FormObject>()

  const setValues = (color: string, animal: string) =>
    form?.setValues({ color, animal })

  return (
    <>
      <Form onLoad={setForm}>
        <Field name="color"  label="Color"/>
        <Field name="animal" label="Animal"/>
      </Form>
      <div className="grid-2 gap-4">
        <button onClick={() => setValues('Grey', 'Elephant')}>
          Grey Elephant
        </button>
        <button onClick={() => setValues('Red', 'Fox')}>
          Red Fox
        </button>
      </div>
    </>
  )
}

export default SetValues