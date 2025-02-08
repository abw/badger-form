import { Form, Field } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/badger-form'

const ChildFunctions = () =>
  <Form>
    <Field
      name="greeting"
      label="Enter a greeting"
    />
    { form =>
      <div className="flex gap-2 blue mar-t-4">
        <button
          type="button"
          onClick={() => form.setValues({ greeting: 'Hello' })}
        >
          Say Hello
        </button>
        <button
          type="button"
          onClick={() => form.setValues({ greeting: 'Goodbye' })}
        >
          Say Goodbye
        </button>
      </div>
    }
  </Form>

export default ChildFunctions