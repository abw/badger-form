import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { useState } from 'react'

const SetValueTest = () => {
  const [field, setField] = useState(false)
  return (
    <Form values={{ foo: 'Hello' }}>
      <Field
        name="animal" id="animal" label="Animal"
        onLoad={setField}
      />
      <button data-testid="antelope" onClick={e => field.setValue('Antelope', e)}>
        Antelope
      </button>
      <button data-testid="badger" onClick={e => field.setValue('Badger', e)}>
        Badger
      </button>
    </Form>
  )
}

it(
  'should call reset',
  async () => {
    const { container } = render(<SetValueTest/>)
    const user     = userEvent.setup()
    const animal   = container.querySelector('#animal')
    const antelope = screen.getByTestId('antelope')
    const badger   = screen.getByTestId('badger')

    // focus on animal field
    await act( () => user.click(animal) )

    // type some input
    await act( () => user.keyboard('Zebra') )
    expect(animal).toHaveValue('Zebra')

    // click on antelope button
    await act( () => user.click(antelope) )
    expect(animal).toHaveValue('Antelope')

    // click on badger button
    await act( () => user.click(badger) )
    expect(animal).toHaveValue('Badger')

  }
)
