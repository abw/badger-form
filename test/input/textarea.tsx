import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, useForm } from '../../lib/index'
import { fail } from '@abw/badger-utils'

export const ShowValue = ({ name }: { name: string }) => {
  const form = useForm()
  return (
    <div data-testid={`value-${name}`}>
      {form.values[name] as string}
    </div>
  )
}

it(
  'renders textarea input',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" type="textarea" id="foo"/>
      </Form>
    )
    const input = container.querySelector('textarea')
    expect(input).toHaveAttribute(
      'id',
      'foo'
    )
  }
)

it(
  'sets textarea value',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field name="foo" type="textarea" id="foo"/>
        <ShowValue name="foo"/>
      </Form>
    )
    expect(screen.getByTestId('value-foo'))
      .toHaveTextContent('')

    const input = container.querySelector('textarea') || fail('no textarea')

    // type some input
    await user.click(input)
    await user.keyboard('Hello')

    expect(screen.getByTestId('value-foo'))
      .toHaveTextContent('Hello')
  }
)
