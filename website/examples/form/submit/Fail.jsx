import { Form, Field, Submit, Errors } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const fire = (values, { pass, fail }) =>
  values.animal.match(/^badger$/i)
    ? pass({ message: 'Hurray!' })
    : fail({ error: `Sorry, that's wrong.` })

const OnSubmitFail = () =>
  <Form onSubmit={fire}>
    <Field
      name="animal"
      label="What is your favourite animal?"
    />
    <Errors/>
    <Submit/>
  </Form>

export default OnSubmitFail