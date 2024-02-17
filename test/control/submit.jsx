import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, Submit } from '../../lib/index.js'
import { useState } from 'react'

const SubmitTest = () => {
  const [values, setValues] = useState({})
  return (
    <Form values={{ foo: 'Hello' }} onSubmit={setValues}>
      <Field name="foo" id="foo" label="The Foo Field"/>
      <Submit/>
      <div data-testid="msg">{values.foo}</div>
    </Form>
  )
}

it(
  'should submit form',
  async () => {
    const { container } = render(<SubmitTest/>)
    const user   = userEvent.setup()
    const foo    = container.querySelector('#foo')
    const msg    = screen.getByTestId('msg')
    const submit = screen.getByRole('button', { name: /submit/i })

    // click on submit button
    await user.click(submit)

    // msg should be rendered
    expect(msg).toHaveTextContent('Hello')

    // focus on foo field and type some more input
    await user.click(foo)
    await user.keyboard(' World')

    // click on submit button
    await user.click(submit)

    // updated msg should be rendered
    expect(msg).toHaveTextContent('Hello World')
  }
)
