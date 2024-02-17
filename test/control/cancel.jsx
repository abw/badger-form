import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, Cancel } from '../../lib/index.js'
import { useState } from 'react'

const CancelExample = () => {
  const [msg, setMsg] = useState()
  return (
    <Form>
      <Field name="foo" id="foo" label="Foo"/>
      <Cancel onClick={() => setMsg('Clicked on cancel')}/>
      <div data-testid="msg">{msg}</div>
    </Form>
  )
}

it(
  'should display message when cancel is clicked',
  async () => {
    render(<CancelExample/>)
    const user   = userEvent.setup()
    const msg    = screen.getByTestId('msg')
    const cancel = screen.getByRole('button', { name: /cancel/i })

    // message should be empty
    expect(msg).toHaveTextContent('')

    // click on cancel button
    await user.click(cancel)

    // message should say clicked
    expect(msg).toHaveTextContent('Clicked on cancel')
  }
)
