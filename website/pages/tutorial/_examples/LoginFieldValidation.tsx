import { Form, Field, Submit, FieldValue } from '@/lib/index'

{/* START */}
import * as yup  from 'yup'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FieldValue // TS type
// PRETEND: } from '@abw/badger-form'

const fields = {
  email: {
    label: 'Email Address',
    validate: (value: FieldValue) => yup
      .string()
      .trim()
      .email("That doesn't look like an email address")
      .required('You must enter your email address!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    validate: (value: FieldValue) => yup
      .string()
      .trim()
      .required('You must enter your password!')
      .min(6, 'Your password should be at least 6 characters')
      .validate(value)
  },
}

const LoginWithValidation = () =>
  <Form fields={fields}>
    <Field name="email"/>
    <Field name="password"/>
    <Submit text="Login"/>
  </Form>

export default LoginWithValidation