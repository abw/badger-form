import { Form, Fields, Debug, ResetSubmit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Fields, Debug, ResetSubmit
// PRETEND: } from '@abw/badger-form'

const fields = {
  name: {
    label: 'Your name',
    placeholder: 'Enter your name',
    required: true
  },
  email: {
    label: 'Your email address',
    required: true
  },
  animal: {
    label: 'Your favourite animal',
    type: 'select',
    placeholder: 'Choose an animal',
    options: ['badger', 'kitten', 'puppy']
  },
  badger: {
    label: 'Do you like badgers?',
    type: 'checkbox',
    text: 'Yes, of course I do'
  }
}

const FormDebug = () =>
  <Form fields={fields}>
    <h2>Form Debugging</h2>
    <Fields names="name email animal badger"/>
    <ResetSubmit
      space
      submit={{ className: 'blue' }}
    />
    <Debug/>
  </Form>

export default FormDebug