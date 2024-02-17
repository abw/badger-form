import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'
import { useState } from 'react'

const ResetTest = () => {
  const [field, setField] = useState(false)
  return (
    <Form values={{ foo: 'Hello' }}>
      <Field
        name="foo" id="foo" label="The Foo Field"
        onLoad={setField}
      />
      <button data-testid="reset" onClick={field.reset}>
        Reset
      </button>
    </Form>
  )
}

it(
  'should call reset',
  async () => {
    const { container } = render(<ResetTest/>)
    const user  = userEvent.setup()
    const foo   = container.querySelector('#foo')
    const reset = screen.getByTestId('reset')

    // focus on foo field
    await act( () => user.click(foo) )

    // type some input
    await act( () => user.keyboard(' World') )
    expect(foo).toHaveValue('Hello World')

    // click on reset button
    await act( () => user.click(reset) )

    expect(foo).toHaveValue('Hello')
  }
)
