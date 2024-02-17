import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, CancelResetSubmit } from '../../lib/index.js'
import { useState } from 'react'

const CancelResetSubmitTest = () => {
  const [msg, setMsg] = useState()
  return (
    <Form
      values={{ foo: 'Hello' }}
      onSubmit={values => setMsg(`Foo is ${values.foo}`)}
    >
      <Field name="foo" id="foo" label="The Foo Field"/>
      <CancelResetSubmit
        cancel={{ onClick: () => setMsg('Clicked on cancel') }}
      />
      <div data-testid="msg">{msg}</div>
    </Form>
  )
}

it(
  'should submit form',
  async () => {
    const { container } = render(<CancelResetSubmitTest/>)
    const user   = userEvent.setup()
    const foo    = container.querySelector('#foo')
    const msg    = screen.getByTestId('msg')
    const cancel = screen.getByRole('button', { name: /cancel/i })
    const reset  = screen.getByRole('button', { name: /reset/i })
    const submit = screen.getByRole('button', { name: /submit/i })

    // click on submit button
    await user.click(submit)

    // msg should be rendered
    expect(msg).toHaveTextContent('Foo is Hello')

    // focus on foo field and type some more input
    await user.click(foo)
    await user.keyboard(' World')

    // click on submit button
    await user.click(submit)

    // updated msg should be rendered
    expect(msg).toHaveTextContent('Hello World')

    // click on reset button
    await user.click(reset)

    // foo field should be reset
    expect(foo).toHaveValue('Hello')

    // click on submit button
    await user.click(submit)

    // msg should be rendered
    expect(msg).toHaveTextContent('Foo is Hello')

    // click on cancel button
    await user.click(cancel)

    // message should say clicked
    expect(msg).toHaveTextContent('Clicked on cancel')
  }
)
