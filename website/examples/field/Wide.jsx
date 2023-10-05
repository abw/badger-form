import { Form, Field, Submit } from '../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const WideFields = () =>
  <Form
    className="pad-4 border bdr-4 bgc-90 bdc-70 bgd-5 bdd-30 width-20rem"
  >
    <h3>Form With Wide Fields</h3>
    <Field
      name="a" label="Text"
      wide
    />
    <Field
      name="b" label="Textarea" type="textarea"
      wide
    />
    <Field
      name="c" label="Select" type="select"
      options={['Badger', 'Mushroom', 'Snake']}
      wide
    />
    <Field
      name="d" label="Checkbox" type="checkbox"
      text="I am a badger"
      wide border
    />
    <Field
      name="e" label="Radio Buttons" type="radio"
      options={['Badger', 'Mushroom', 'Snake']}
      optionsClass="grid gap-2"
      wide border
    />
    <div className="text-right">
      <Submit className="brand"/>
    </div>
  </Form>

export default WideFields