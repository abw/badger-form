import { Form, Field, Submit, FieldValidateFunction } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FieldValidateFunction // TS type
// PRETEND: } from '@abw/badger-form'

const existingUsers: Record<string, boolean> = {
  alice:   true,
  bob:     true,
  charlie: true,
}

const validateUserName: FieldValidateFunction = (
  value, _field, resolve, reject
) => {
  if (String(value).length < 3) {
    reject({ message: 'Your username must be at least 3 characters' })
  }
  if (existingUsers[(value as string).toLowerCase()]) {
    reject({ message: 'Sorry, that username is taken' })
  }
  else {
    resolve({ message: 'That username is available' })
  }
}

const fields = {
  username: {
    label: 'Username',
    help:  'Choose a username (minimum length: 3)',
    validateOnChange: true,
    minValidateLength: 3,
    validate: validateUserName
  }
}

const MinValidateLengthExample = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Submit/>
  </Form>

export default MinValidateLengthExample