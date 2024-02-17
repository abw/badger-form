import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'
import { useState } from 'react'

const ChangeTest = () => {
  const [msg, setMsg] = useState(false)
  return (
    <Form>
      <Field
        name="foo" id="foo"
        onChange={field => setMsg(field.value)}
      />
      { Boolean(msg) &&
        <div data-testid="msg">{msg}</div>
      }
    </Form>
  )
}

it(
  'should call onChange',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<ChangeTest/>)

    // focus on foo field
    await act( () => user.click( container.querySelector('#foo') ) )
    expect(screen.queryAllByTestId('msg').length)
      .toBe(0)

    // type some input
    await act( () => user.keyboard('Hello') )
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Hello')

    // type some more input
    await act( () => user.keyboard(' World') )
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Hello World')
  }
)
