import { FieldValidateFunction } from '@/lib/index'

{/* START */}
// PRETEND: import { FieldValidateFunction } from '@abw/badger-form'
import * as yup  from 'yup'

const validateEmail: FieldValidateFunction = value => yup
  .string()
  .trim()
  .email()
  .required('You must enter your email address!')
  .validate(value)

const validatePassword: FieldValidateFunction = value => yup
  .string()
  .trim()
  .required('You must enter a password!')
  .min(6, 'Your password should be at least 6 characters')
  .validate(value)

export const fields = {
  name: {
    label: 'Your name',
    required: true,
  },
  email: {
    label: 'Email address',
    required: true,
    validate: validateEmail,
  },
  password: {
    label: 'Password',
    type: 'password',
    required: true,
    validate: validatePassword,
  },
  passcheck: {
    label: 'Confirm',
    type: 'password',
    required: true,
    validate: validatePassword,
  },
  experience: {
    label: 'What is your level of experience?',
    type: 'radio',
    options:  ['Beginner', 'Intermediate', 'Expert'],
    // inputsClass: 'radio inputs lg-grid-3',
  },
  dob: {
    type: 'date',
    label: 'Date of Birth',
  },
  price: {
    type:  'number',
    label: 'Your donation?',
    prefix: '£',
    suffix: '.00',
    min: 11,
    max: 100,
  },
  animal: {
    label: 'Your favourite animal?',
    type: 'select',
    default: 'Badger',
    options: ['Badger', 'Ferret', 'Stoat'],
  },
  color: {
    label:    'Your favourite color?',
    type:     'select',
    placeholder: 'Select a color',
    options:  [
      // { value: null,     text: 'Select a color' },
      { value: 'red',    text: 'Red'    },
      { value: 'orange', text: 'Orange' },
      { value: 'yellow', text: 'Yellow' },
      { value: 'violet', text: 'Violet' },
      { value: 'white',  text: 'White'  },
    ],
  },
  terms: {
    label:    'Terms and conditions',
    type:     'checkbox',
    text:     'I accept the Terms and Conditions',
    className: 'fluid',
    required:  true,
    requiredMessage: 'You must accept the Terms and Conditions'
  },
}

export default fields