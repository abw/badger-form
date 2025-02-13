import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { fail } from '@abw/badger-utils'

export const PrepareTest = () =>
  <Form>
    <Field
      name="foo" id="foo"
      prepareValue={value => (value as string).toUpperCase()}
    />
  </Form>


it(
  'should call prepareValue',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<PrepareTest/>)

    // focus on foo field
    const foo = container.querySelector('#foo') || fail('no foo')
    await user.click(foo)

    // type some input
    await user.keyboard('Hello')
    expect(foo).toHaveValue('HELLO')
  }
)
