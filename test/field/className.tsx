import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '@/lib/index'

it(
  'has custom className',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" label="Foo" className="my-field"/>
      </Form>
    )
    expect(container.querySelector('div.my-field label'))
      .toHaveTextContent('Foo')
  }
)
