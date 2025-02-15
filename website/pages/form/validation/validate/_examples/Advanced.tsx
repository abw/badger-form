import { Form, Field, Errors, Submit, FormValidateFunction } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:   Form, Field, Errors, Submit,
// PRETEND:   FormValidateFunction // TS type
// PRETEND: } from '@abw/badger-form'

const checkPasswordsMatch: FormValidateFunction = (values, form) => {
  const password1 = String(values.password1).trim()
  const password2 = String(values.password2).trim()

  if (password1 === password2) {
    // resolve but only return a single password
    return Promise.resolve({ password: password1 })
  }
  else {
    // reset the form
    form.reset()
    // reject!
    return Promise.reject({
      error: "The two passwords you entered don't match",
    })
  }
}

const PasswordsExample = () =>
  <Form validate={checkPasswordsMatch} debug>
    <Errors fieldErrors={false}/>
    <Field
      name="password1"
      type="password"
      label="New Password"
      required
    />
    <Field
      name="password2"
      type="password"
      label="Confirm Password"
      required
    />
    <Submit/>
  </Form>

export default PasswordsExample