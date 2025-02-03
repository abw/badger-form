import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { useState } from 'react'

const SetValidTest = () => {
  const [field, setField] = useState(false)
  return (
    <Form>
      <Field
        name="foo" id="foo" label="Foo"
        onLoad={setField}
      />
      <button data-testid="valid" onClick={e => field.setValid('This is OK', e)}>
        Valid
      </button>
      <button data-testid="invalid" onClick={e => field.setInvalid('This is not OK', e)}>
        Invalid
      </button>
    </Form>
  )
}

it(
  'should call setValid and setInvalid',
  async () => {
    const { container } = render(<SetValidTest/>)
    const user    = userEvent.setup()
    const field   = container.querySelector('div.field')
    const valid   = screen.getByTestId('valid')
    const invalid = screen.getByTestId('invalid')

    // click on valid button
    await act( () => user.click(valid) )
    expect(field).toHaveClass('valid')
    expect(field.querySelector('div.help')).toHaveTextContent('This is OK')

    // click on invalid button
    await act( () => user.click(invalid) )
    expect(field).toHaveClass('invalid')
    expect(field.querySelector('div.help')).toHaveTextContent('This is not OK')
  }
)
