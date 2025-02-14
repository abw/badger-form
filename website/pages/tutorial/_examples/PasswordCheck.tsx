import { Form, Fields, Errors, Submit, FormValidateFunction, FieldValue } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:   Form, Fields, Errors, Submit,
// PRETEND:   FormValidateFunction, FieldValue // TS types
// PRETEND: } from '@abw/badger-form'
import * as yup  from 'yup'

const validateForm: FormValidateFunction = values => new Promise(
  (resolve, reject) => {
    if (values.password === values.passcheck) {
      return resolve(values)
    }
    else {
      return reject({
        error: "Your passwords don't match!",
        errors: [
          { name: 'password',  message: 'Please re-enter your password' },
          { name: 'passcheck', message: 'Please re-confirm your password' },
        ]
      })
    }
  }
)

const validateEmail = (value: FieldValue) => yup
  .string()
  .trim()
  .email()
  .required('You must enter your email address!')
  .validate(value)

const validatePassword = (value: FieldValue) => yup
  .string()
  .trim()
  .required('You must enter a password!')
  .min(6, 'Your password should be at least 6 characters')
  .validate(value)

const fields = {
  email: {
    label:    'Email Address',
    validate: validateEmail
  },
  password: {
    label:    'Password',
    type:     'password',
    validate: validatePassword
  },
  passcheck: {
    label:    'Confirm Password',
    type:     'password',
    validate: validatePassword
  },
}

const LoginWithValidation = () =>
  <Form fields={fields} validate={validateForm}>
    <Fields names="email password passcheck"/>
    <Errors title="Registration Error" fieldErrors={false}/>
    <Submit text="Register"/>
  </Form>

export default LoginWithValidation