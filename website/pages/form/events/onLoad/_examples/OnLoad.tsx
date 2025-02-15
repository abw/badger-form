import { Form, Field, FormObject } from '@/lib/index'

{/* START */}
import { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field,
// PRETEND:   FormObject // TS type
// PRETEND: } from '@abw/badger-form'

const OnLoadExample = () => {
  const [form, setForm] = useState<FormObject>()
  const setAnimal =(animal: string) =>
    form?.setValues({ animal })

  return (
    <>
      <Form onLoad={setForm}>
        <Field
          name="animal"
          label="Animal"
        />
      </Form>

      <div className="grid-2 gap-4">
        <button onClick={() => setAnimal('Badger')}>
          Badger
        </button>
        <button onClick={() => setAnimal('Ferret')}>
          Ferret
        </button>
      </div>
    </>
  )
}

export default OnLoadExample