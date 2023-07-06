import React from 'react'
import Form from '../../lib/Form.jsx'
import Field from '../../lib/Field.jsx'

const fields = {
  name: {
    label: 'Name',
    placeholder: 'Wibble',
    required: 'You must enter your name'
  },
  password: {
    required: 'You must choose a password',
    messages: {
      minLength: "You numpty!  That's not long enough!",
      maxLength: field => `You muppet!  It can't be longer than ${field.maxLength} characters!`
    }
  }
}
const values = {
  name: 'Andy Wardley',
  animal: 'badger',
}

const Test = () => {
  return (
    <Form
      fields={fields}
      values={values}
      onSubmit={submit => console.log('SUBMIT: ', submit)}
    >
      <h3>Demo Form</h3>
      {/* <Field name="name" help="Enter your name"/> */}
      <Field
        name="password"
        label="Choose a password"
        help="Password must be at least 6 characters"
        minLength={6}
        maxLength={10}
        type="password"
      />
      <button type="submit">Submit</button>
    </Form>
  )
}


export default Test