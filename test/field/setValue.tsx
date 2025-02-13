import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, FieldRenderProps } from '@/lib/index'
import { useState } from 'react'
import { fail } from '@abw/badger-utils'

export const SetValueTest = () => {
  const [field, setField] = useState<FieldRenderProps>()
  return (
    <Form values={{ foo: 'Hello' }}>
      <Field
        name="animal" id="animal" label="Animal"
        onLoad={setField}
      />
      <button data-testid="antelope" onClick={e => field?.setValue('Antelope', e)}>
        Antelope
      </button>
      <button data-testid="badger" onClick={e => field?.setValue('Badger', e)}>
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
    const animal   = container.querySelector('#animal') || fail('no animal')
    const antelope = screen.getByTestId('antelope')
    const badger   = screen.getByTestId('badger')

    // focus on animal field
    await user.click(animal)

    // type some input
    await user.keyboard('Zebra')
    expect(animal).toHaveValue('Zebra')

    // click on antelope button
    await user.click(antelope)
    expect(animal).toHaveValue('Antelope')

    // click on badger button
    await user.click(badger)
    expect(animal).toHaveValue('Badger')

  }
)
