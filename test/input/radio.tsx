import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, useForm } from '../../lib/index'

export const ShowValue = ({ name }: { name: string }) => {
  const form = useForm()
  return (
    <div data-testid={`value-${name}`}>
      {form.values[name] as string}
    </div>
  )
}

it(
  'renders radio input',
  async () => {
    render(
      <Form>
        <Field
          name="foo" type="radio"
          options={['alpha', 'bravo', 'charlie']}
        />
        <ShowValue name="foo"/>
      </Form>
    )
    const alpha   = screen.getByLabelText('alpha')
    const bravo   = screen.getByLabelText('bravo')
    const charlie = screen.getByLabelText('charlie')
    const output  = screen.getByTestId('value-foo')
    expect(output).toHaveTextContent('')

    await userEvent.click(alpha)
    expect(output).toHaveTextContent('alpha')

    await userEvent.click(bravo)
    expect(output).toHaveTextContent('bravo')

    await userEvent.click(charlie)
    expect(output).toHaveTextContent('charlie')
  }
)

it(
  'renders radio input with values',
  async () => {
    render(
      <Form>
        <Field
          name="foo" type="radio"
          options={[
            { value: 'letter-a', text: 'alpha' },
            { value: 'letter-b', text: 'bravo' },
            { value: 'letter-c', text: 'charlie' },
          ]}
        />
        <ShowValue name="foo"/>
      </Form>
    )
    const alpha   = screen.getByLabelText('alpha')
    const bravo   = screen.getByLabelText('bravo')
    const charlie = screen.getByLabelText('charlie')
    const output  = screen.getByTestId('value-foo')
    expect(output).toHaveTextContent('')

    await userEvent.click(alpha)
    expect(output).toHaveTextContent('letter-a')

    await userEvent.click(bravo)
    expect(output).toHaveTextContent('letter-b')

    await userEvent.click(charlie)
    expect(output).toHaveTextContent('letter-c')
  }
)

