import { Form, Field, ResetSubmit, useField } from '../../../lib/index.js'
import '../../styles/examples/animals.scss'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, ResetSubmit, useField
// PRETEND: } from '@abw/badger-form'

const animals = ['badger', 'kitten', 'puppy']
const credits = {
  kitten: 'Sergey Semin',
  puppy:  'Mathis Jrdl',
  badger: 'Vincent van Zalinge',
}

const MyInput = () => {
  const { value, setValue } = useField()
  return (
    <div>
      <div className="animals grid-3 gap-4">
        { animals.map(
          animal =>
            <img
              key={animal}
              className={value === animal ? 'selected' : ''}
              src={`/badger-form/images/animals/${animal}.jpg`}
              onClick={() => setValue(animal)}
            />
        )}
      </div>
      { Boolean(value) &&
        <div className="small mar-t-2">
          Picture of {value} by {credits[value]} from unsplash.com
        </div>
      }
    </div>
  )
}

const isBadger = (value, { fail }) =>
  value === 'badger'
    ? true
    : fail({ message: 'You must pick the badger' })

const FieldInput = () =>
  <Form>
    <h3>Field With Custom Input</h3>
    <Field
      name="animal"
      label="Pick an animal"
      Input={MyInput}
      validate={isBadger}
      wide
    />
    <ResetSubmit
      submit={{ className: 'blue' }}
      space
    />
  </Form>

export default FieldInput