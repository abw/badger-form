import { Form, Field } from '@/lib/index'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SetFocusExample = () => {
  const [form, setForm] = useState(false)

  return (
    <>
      <Form onLoad={setForm}>
        <Field
          name="field1" label="Field One"
        />
        <Field
          name="field2" label="Field Two"
          type="textarea"
        />
        <div className="grid-2 gap-4">
          <Field
            name="field3" label="Field Three"
            type="checkbox" text="One Louder"
          />
          <Field
            name="field4" label="Field Four"
            type="select" options={['Nigel', 'David', 'Derek']}
          />
        </div>
        <Field
          name="field5" label="Field Five"
          type="radio" default='Keyboards'
          optionClass="inline"
          options={['Vocals', 'Guitar', 'Bass', 'Keyboards', 'Drums']}
        />
      </Form>
      <div className="mar-t-4 grid-fit gap-2">
        <button onClick={() => form?.setFocus('field1')}>
          Focus One
        </button>
        <button onClick={() => form?.setFocus('field2')}>
          Focus Two
        </button>
        <button onClick={() => form?.setFocus('field3')}>
          Focus Three
        </button>
        <button onClick={() => form?.setFocus('field4')}>
          Focus Four
        </button>
        <button onClick={() => form?.setFocus('field5')}>
          Focus Five
        </button>
      </div>
    </>
  )
}

export default SetFocusExample