import React from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field, Hidden, useForm } from '@/lib/index'

const ShowHiddenValue = ({name}) => {
  const form = useForm()
  return (
    <div data-testid={`hidden-value-${name}`}>
      {form.values[name]}
    </div>
  )
}

it(
  'renders hidden input',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" type="hidden" value="123"/>
      </Form>
    )
    const input = container.querySelector('input')
    expect(input).toHaveAttribute(
      'type',
      expect.stringContaining('hidden')
    )
  }
)

it(
  'renders hidden component',
  () => {
    const { container } = render(
      <Form>
        <Hidden name="foo" value="123"/>
      </Form>
    )
    const input = container.querySelector('input')
    expect(input).toHaveAttribute(
      'type',
      expect.stringContaining('hidden')
    )
  }
)

it(
  'has hidden value from field value',
  () => {
    render(
      <Form>
        <Field name="foo" type="hidden" value="123"/>
        <ShowHiddenValue name="foo"/>
      </Form>
    )
    expect(screen.getByTestId('hidden-value-foo'))
      .toHaveTextContent('123')
  }
)

it(
  'has hidden value from form values',
  () => {
    render(
      <Form values={{ foo: 456 }}>
        <Field name="foo" type="hidden"/>
        <ShowHiddenValue name="foo"/>
      </Form>
    )
    expect(screen.getByTestId('hidden-value-foo'))
      .toHaveTextContent('456')
  }
)

it(
  'has hidden values from form hidden',
  () => {
    render(
      <Form hidden={{ foo: 123, bar: 456 }}>
        <ShowHiddenValue name="foo"/>
        <ShowHiddenValue name="bar"/>
      </Form>
    )
    expect(screen.getByTestId('hidden-value-foo'))
      .toHaveTextContent('123')
    expect(screen.getByTestId('hidden-value-bar'))
      .toHaveTextContent('456')
  }
)

