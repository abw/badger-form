import { Form, Field, Fields, Fieldset, Errors, Submit, FormValidateFunction } from '@/lib/index'


{/* START */}
import { useState } from 'react'
import fields from './RegistrationFields.ts'
// PRETEND: import {
// PRETEND:   Form, Field, Fields, Fieldset, Errors, Submit,
// PRETEND:   FormValidateFunction // TS type
// PRETEND: } from '@abw/badger-form'

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

const RegistrationForm = () => {
  const [color, setColor] = useState<string>()

  return (
    <Form
      fields={fields}
      validate={validateForm}
      showRequired
    >
      <Fieldset legend="Your Details">
        <Fields
          names="name email password passcheck"
          grid={2}
          stack="laptop"
        />
      </Fieldset>
      <Errors fieldErrors={false}/>
      <Fieldset legend="Other Information">
        <Fields
          names="dob price"
          grid={2}
          stack="laptop"
        />
        <Field name="experience"/>
        <div className="grid-2 gap-v-none gap-h-4 stack-laptop">
          <Field name="animal"/>
          <Field
            name="color"
            onChange={
              ({ value }) => setColor(value as string)
            }
          />
        </div>
        { color &&
          <div
            style={{
              color: color,
              backgroundColor: '#444',
              marginTop: '1em',
              padding: '0.25rem 0.5rem',
              textAlign: 'center'
            }}
          >{color} is a great color!</div>
        }
      </Fieldset>
      <Field name="terms"/>
      <Submit text="Register"/>
    </Form>
  )
}

export default RegistrationForm