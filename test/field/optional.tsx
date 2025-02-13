import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '@/lib/index'

it(
  'has showOptional',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" label="Foo" showOptional/>
      </Form>
    )
    expect(container.getElementsByClassName('field')[0])
      .toHaveClass('optional')
  }
)

describe.skip(
  'optionalLabel is now CSS',
  () => it(
    'has custom optionalLabel',
    () => {
      const { container } = render(
        <Form>
          <Field name="foo" label="Foo" showOptional optionalLabel="Maybe"/>
        </Form>
      )
      expect(container.getElementsByClassName('optional')[0])
        .toHaveTextContent('Maybe')
    }
  )
)

it(
  'should inherit showOptional from form',
  () => {
    const { container } = render(
      <Form showOptional>
        <Field name="foo" label="Foo"/>
      </Form>
    )
    expect(container.getElementsByClassName('field')[0])
      .toHaveClass('optional')
  }
)

describe.skip(
  'optionalLabel is now CSS',
  () => it(
    'should inherit optionalLabel from form',
    () => {
      const { container } = render(
        <Form optionalLabel="Maybe">
          <Field name="foo" label="Foo" showOptional/>
        </Form>
      )
      expect(container.getElementsByClassName('optional')[0])
        .toHaveTextContent('Maybe')
    }
  )
)


it(
  'is not optional',
  () => {
    render(
      <Form>
        <Field name="foo" label="Foo" required/>
      </Form>
    )
    expect(screen.queryByText('Optional')).toBeNull()
  }
)
