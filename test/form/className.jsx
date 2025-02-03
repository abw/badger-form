import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Form } from '@/lib/index'

it(
  'has custom className',
  () => {
    const { container } = render(
      <Form className="my-formula">
      </Form>
    )
    expect(container.getElementsByClassName('my-formula').length).toBe(1)
  }
)
