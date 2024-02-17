import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, Reset } from '../../lib/index.js'

const ResetTest = () =>
  <Form values={{ foo: 'Hello' }}>
    <Field name="foo" id="foo" label="The Foo Field"/>
    <Reset/>
  </Form>

it(
  'should reset form',
  async () => {
    const { container } = render(<ResetTest/>)
    const user  = userEvent.setup()
    const foo   = container.querySelector('#foo')
    const reset = screen.getByRole('button', { name: /reset/i })

    // focus on foo field
    await user.click(foo)

    // type some input
    await user.keyboard(' World')
    expect(foo).toHaveValue('Hello World')

    // click on reset button
    await user.click(reset)

    expect(foo).toHaveValue('Hello')
  }
)
