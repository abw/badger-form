import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'
import { useState } from 'react'

const BlurTest = () => {
  const [msg, setMsg] = useState(false)
  return (
    <Form>
      <Field
        name="foo" id="foo"
        onBlur={() => setMsg('Hello World')}
      />
      <Field
        name="bar" id="bar"
        onBlur={() => setMsg('Goodbye World')}
      />
      { Boolean(msg) &&
        <div data-testid="msg">{msg}</div>
      }
    </Form>
  )
}

it(
  'should call onBlur',
  async () => {
    const { container } = render(<BlurTest/>)
    const user = userEvent.setup()
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field
    await act( () => user.click(foo) )
    // field container should have focus class
    expect(container.getElementsByClassName('field')[0])
      .toHaveClass('focus')

    // no message
    expect(screen.queryAllByTestId('msg').length)
      .toBe(0)

    // focus on bar field
    await act( () => user.click(bar) )

    // first field container should NOT have focus class
    expect(container.getElementsByClassName('field')[0])
      .not.toHaveClass('focus')

    // second field container should have focus class
    expect(container.getElementsByClassName('field')[1])
      .toHaveClass('focus')

    // expect foo's onBlur to be called
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Hello World')

    // focus on foo field - expect bar's onBlur to be called
    await act( () => user.click(foo) )

    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Goodbye World')
  }
)
