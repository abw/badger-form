import { Form, Field, Submit, FieldValidateFunction } from '@/lib/index'

{/* START */}
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   FieldValidateFunction // TS type
// PRETEND: } from '@abw/badger-form'

const validateUsername: FieldValidateFunction = (
  value, _field, resolve, reject
) => {
  if (String(value).match(/badger/i)) {
    resolve({
      value: `${value} is a great name`
    })
  }
  else {
    reject({
      value:   'Mr Badger',
      message: 'Your username must contain the word "badger"'
    })
  }
}

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: validateUsername
  }
}

const ValidateExample = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Submit/>
  </Form>

export default ValidateExample