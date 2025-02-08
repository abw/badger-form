import { Form, Field, useForm } from '@/lib/index'

{/* START */}
import React  from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/badger-form'

const UseFormReset = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two"/>
    <MyResetButton/>
  </Form>

const MyResetButton = () => {
  const { reset } = useForm()
  return (
    <button onClick={reset}>
      Reset the Form
    </button>
  )
}

export default UseFormReset