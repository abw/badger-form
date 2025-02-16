import { Form, Fields, Submit, FieldValue } from '@/lib/index'

{/* START */}
import * as yup  from 'yup'
// PRETEND: import {
// PRETEND:   Form, Fields, Submit,
// PRETEND:   FieldValue // TS type
// PRETEND: } from '@abw/badger-form'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: (value: FieldValue) => yup
      .string()
      .trim()
      .required('You must enter your username you numpty!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    help:  'Enter your password',
    validate: (value: FieldValue) => yup
      .string()
      .trim()
      .required('You must enter your password you muppet!')
      .validate(value)
  }
}

const ValidateExample = () =>
  <Form
    fields={fields}
    validateOnBlur
  >
    <Fields names="username password"/>
    <Submit/>
  </Form>

export default ValidateExample