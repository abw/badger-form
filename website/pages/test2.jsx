import React from 'react'
import Form from '../../lib/Form.jsx'
import Field from '../../lib/Field.jsx'
import UseForm from '../../lib/Form/UseForm.jsx'

const fields = {
  name: {
    label:       'Name',
    help:        'Enter your name',
    placeholder: 'Bobby Badger',
    required:    'You must enter your name',
  },
  password: {
    type:       'password',
    required:   'You must choose a password',
    label:      'Choose a password',
    help:       'Password must be at least 6 characters',
    minLength:  6,
    maxLength:  10,
    prefix: 'K',
    messages: {
      minLength: "You numpty!  That's not long enough!",
      maxLength: field => `You muppet!  It can't be longer than ${field.maxLength} characters!`
    }
  },
  blurb: {
    label: 'More about you',
    type: 'textarea',
  },
  animal: {
    type: 'select',
    label: 'Select an animal',
    placeholder: 'Animal',
    options: ['Badger', 'Ferret', 'Stoat']
  },
  animal2: {
    type: 'radio',
    label: 'Select an animal',
    options: ['Badger', 'Ferret', 'Stoat']
  },
  terms: {
    type:     'checkbox',
    // required: { value: true, message: 'You must' },
    // required: true,
    // validate: value => { console.log(`validate:`, value); return value },
    validate: {
      checked: value => value || 'You must accept',
    },
    // text:    'I accept the terms and conditions'
    text:    'OK',
    suffix: 'C',
  },
}
const values = {
  name:   'Andy Wardley',
  animal: 'badger',
  blurb: 'I like badgers'
}

const Test = () => {
  return (
    <Form
      fields={fields}
      values={values}
      onSubmit={submit => console.log('SUBMIT: ', submit)}
      className="border bdc-80 bgc-95 pad-6 bdr-2"
      style={{ width: '40rem' }}
    >
      <h3>Demo Form</h3>
      <div className="grid-2 gap-4">
        <Field name="name" fieldClass="mar-b-0" wide/>
        <Field name="password" fieldClass="mar-b-0" wide/>
        <Field name="animal" wide/>
        <Field name="blurb" wide border/>
      </div>
      <Field name="animal2" border inputClass="grid-fit gap-4"/>
      <Field name="terms" wide border/>
      <Field name="wibble">
        {/* { stuff => console.log(`field stuff: `, stuff) } */}
        { field => <div>SOME STUFF for {field.name}</div> }
      </Field>
      { form => <>FORM: {form.className}</> }
      <UseForm>
        { form => <button type="button" onClick={() => form.reset(form.values)}>RESET{console.log(`form:`, form)}</button> }
      </UseForm>
      <div className="flex space start">
        <button type="reset">Reset</button>
        <button type="submit" className="blue">Submit</button>
      </div>
    </Form>
  )
}


export default Test