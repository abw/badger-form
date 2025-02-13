import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, FieldRenderProps } from '@/lib/index'
import { useState } from 'react'
import { fail } from '@abw/badger-utils'

export const SetValidTest = () => {
  const [field, setField] = useState<FieldRenderProps>()
  return (
    <Form>
      <Field
        name="foo" id="foo" label="Foo"
        onLoad={setField}
      />
      <button data-testid="valid" onClick={e => field?.setValid('This is OK', e)}>
        Valid
      </button>
      <button data-testid="invalid" onClick={e => field?.setInvalid('This is not OK', e)}>
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
    const field   = container.querySelector('div.field') || fail('no field')
    const valid   = screen.getByTestId('valid')
    const invalid = screen.getByTestId('invalid')

    // click on valid button
    await user.click(valid)
    expect(field).toHaveClass('valid')
    expect(field.querySelector('div.help')).toHaveTextContent('This is OK')

    // click on invalid button
    await user.click(invalid)
    expect(field).toHaveClass('invalid')
    expect(field.querySelector('div.help')).toHaveTextContent('This is not OK')
  }
)
