import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '@/lib/index'

it(
  'renders function',
  () => {
    render(
      <Form>
        <Field name="foo" label="The Foo Field">
          { field => <div data-testid="msg">This is {field.label}</div> }
        </Field>
      </Form>
    )
    const msg = screen.getByTestId('msg')
    expect(msg).toHaveTextContent('This is The Foo Field')
  }
)
