import { Form, Field, useForm } from '@/lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/badger-form'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <div className="grid-2 gap-4">
        <Setter color="Grey" animal="Elephant"/>
        <Setter color="Red"  animal="Fox"/>
      </div>
    </Form>
  </>

const Setter = ({ color, animal }) => {
  const { setValues } = useForm()
  return (
    <button onClick={
      e => {
        e.preventDefault()
        setValues({ color, animal }, e)
      }
    }>
      {color} {animal}
    </button>
  )
}

export default UseSetValues