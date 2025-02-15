import { Form, Field, Errors, Submit, FieldValues } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:  Form, Field, Errors, Submit,
// PRETEND:  FieldValues // TS type
// PRETEND: } from '@abw/badger-form'

const doubleFail = (values: FieldValues) =>
  Promise.reject({
    errors: [
      {
        name:    'username',
        message: `Sorry, ${values.username} is already taken`
      },
      {
        // 'field' is an alias for 'name'
        field: 'password',
        // 'error' is an alias for 'message'
        error: 'Your password is too easy to guess'
      }
    ]
  })

const OnSubmitErrors = () =>
  <Form onSubmit={doubleFail}>
    <Field
      name="username"
      label="Pick a username"
      required
    />
    <Field
      name="password"
      label="Choose a password"
      type="password"
      required
    />
    <Errors fieldErrors/>
    <Submit/>
  </Form>

export default OnSubmitErrors