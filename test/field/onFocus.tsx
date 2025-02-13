import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { useState } from 'react'
import { fail } from '@abw/badger-utils'

export const FocusTest = () => {
  const [msg, setMsg] = useState<string|null>()
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
    const foo = container.querySelector('#foo') || fail('no foo')

    // focus on foo field
    await userEvent.click(foo)

    // field container should have focus class
    expect(container.getElementsByClassName('field')[0])
      .toHaveClass('focus')

    // onFocus should have been triggered
    expect(screen.getByTestId('msg'))
      .toHaveTextContent('Hello World')
  }
)
