import { Form, Field, Errors, Submit, FieldValues } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:  Form, Field, Errors, Submit,
// PRETEND:  FieldValues // TS type
// PRETEND: } from '@abw/badger-form'

const taken = (values: FieldValues) =>
  Promise.reject({
    errors: {
      username: `Sorry, ${values.username} is already taken`
    }
  })

const OnSubmitFail = () =>
  <Form onSubmit={taken} debug>
    <Field
      name="username"
      label="Pick a username"
      required
    />
    <Field
      name="password"
      label="Enter a password"
      required
    />
    <Errors fieldErrors/>
    <Submit/>
  </Form>

export default OnSubmitFail