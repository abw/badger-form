import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, FieldContextItems } from '@/lib/index'
import { useState } from 'react'

export const SetValueTest = () => {
  const [foo, setFoo] = useState<FieldContextItems>()
  const [bar, setBar] = useState<FieldContextItems>()
  return (
    <Form>
      <Field
        name="foo" id="foo" label="Foo"
        onLoad={setFoo}
      />
      <Field
        name="bar" id="bar" label="Bar"
        onLoad={setBar}
      />
      <button data-testid="focus-foo" onClick={e => foo?.setFocus(e)}>
        Focus Foo
      </button>
      <button data-testid="focus-bar" onClick={e => bar?.setFocus(e)}>
        Focus Bar
      </button>
    </Form>
  )
}

it(
  'should call setFocus()',
  async () => {
    const { container } = render(<SetValueTest/>)
    const user   = userEvent.setup()
    const fields = container.querySelectorAll('div.field')
    const focfoo = screen.getByTestId('focus-foo')
    const focbar = screen.getByTestId('focus-bar')

    // focus on foo field
    await user.click(focfoo)
    expect(fields[0]).toHaveClass('focus')
    expect(fields[1]).not.toHaveClass('focus')

    // focus on bar field
    await user.click(focbar)
    expect(fields[0]).not.toHaveClass('focus')
    expect(fields[1]).toHaveClass('focus')
  }
)
