import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'
import { useState } from 'react'

const FocusTest = () => {
  const [msg, setMsg] = useState(false)
  return (
    <Form>
      <Field
        name="foo" label="Foo" id="foo"
        onFocus={() => setMsg('Hello World')}
      />
      { Boolean(msg) &&
        <div data-testid="msg">{msg}</div>
      }
    </Form>
  )
}

it(
  'should call onFocus',
  async () => {
    const { container } = render(<FocusTest/>)
    const foo =container.querySelector('#foo')

    // focus on foo field
    await act( () => userEvent.click(foo) )

    // field container should have focus class
    expect(container.getElementsByClassName('field')[0])
      .toHaveClass('focus')

    // onFocus should have been triggered
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Hello World')
  }
)
