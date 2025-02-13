import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import { fail } from '@abw/badger-utils'

it(
  'has suffix',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" label="Foo" className="my-field" suffix="Z"/>
      </Form>
    )
    const inputs = container.querySelector('div.my-field div.inputs') || fail('no inputs')
    expect(inputs).toHaveClass('suffixed')
    const suffix = inputs.querySelector('div.suffix')
    expect(suffix).toHaveTextContent('Z')
  }
)
