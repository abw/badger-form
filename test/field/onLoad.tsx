import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, FieldContextItems } from '@/lib/index'
import { useState } from 'react'

export const OnLoadTest = () => {
  const [field, setField] = useState<FieldContextItems>()
  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onLoad={setField}
      />
      <div data-testid="msg">{field?.label}</div>
    </Form>
  )
}

it(
  'should call onLoad',
  async () => {
    render(<OnLoadTest/>)
    const msg = screen.getByTestId('msg')
    expect(msg).toHaveTextContent('The Foo Field')
  }
)
