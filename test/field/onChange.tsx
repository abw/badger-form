import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { useState } from 'react'
import { fail } from '@abw/badger-utils'

export const ChangeTest = () => {
  const [msg, setMsg] = useState<string|null>()
  return (
    <Form>
      <Field
        name="foo" id="foo"
        onChange={field => setMsg(field.value as string)}
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
    const foo = container.querySelector('#foo') || fail('no foo')

    // focus on foo field
    await user.click(foo)
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
