import React from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '@/lib/index.js'
import { useState } from 'react'

const OnLoadTest = () => {
  const [field, setField] = useState(false)
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
