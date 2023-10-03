import { Form, Field, Submit, Errors } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const fire = (values, { pass, fail }) =>
  values.animal.match(/^badger$/i)
    ? pass({ message: 'Hurray!', animal: values.animal })
    : fail({ error: `Sorry, that's wrong.` })

const onSuccess = ({ message, animal }) =>
  window.alert(`${message} - ${animal} is the right answer!`)

const OnSuccess = () =>
  <Form onSubmit={fire} onSuccess={onSuccess}>
    <Field
      name="animal"
      label="What is your favourite animal?"
    />
    <Errors/>
    <Submit/>
  </Form>

export default OnSuccess