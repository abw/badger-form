import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '@/lib/index'

it(
  'has showRequired',
  () => {
    const { container } = render(
      <Form>
        <Field name="foo" label="Foo" required showRequired/>
      </Form>
    )
    expect(container.getElementsByClassName('field')[0])
      .toHaveClass('required')
  }
)

describe.skip(
  'requiredLabel is now CSS',
  () => it(
    'has custom requiredLabel',
    () => {
      const { container } = render(
        <Form>
          <Field name="foo" label="Foo" required showRequired requiredLabel="Mandatory"/>
        </Form>
      )
      expect(container.getElementsByClassName('required')[0])
        .toHaveTextContent('Mandatory')
    }
  )
)

it(
  'should inherit showRequired from form',
  () => {
    const { container } = render(
      <Form showRequired>
        <Field name="foo" label="Foo" required/>
      </Form>
    )
    expect(container.getElementsByClassName('field')[0])
      .toHaveClass('required')
  }
)

describe.skip(
  'requiredLabel is now CSS',
  () => it(
    'should inherit requiredLabel from form',
    () => {
      const { container } = render(
        <Form requiredLabel="Mandatory">
          <Field name="foo" label="Foo" required showRequired/>
        </Form>
      )
      expect(container.getElementsByClassName('required')[0])
        .toHaveTextContent('Mandatory')
    }
  )
)

it(
  'is not required',
  () => {
    render(
      <Form>
        <Field name="foo" label="Foo" showRequired/>
      </Form>
    )
    expect(screen.queryByText('Optional')).toBeNull()
  }
)
