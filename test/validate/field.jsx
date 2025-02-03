import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import * as yup from 'yup'
import { fail } from '@abw/badger-utils'

const ValidateYupOK = value => yup
  .string()
  .trim()
  .validate(value)

const ValidateYup20 = value => yup
  .string()
  .trim()
  .min(20, 'It must be at least 20 characters')
  .validate(value)

const ValidateOK = value => Promise.resolve(value)

const ValidateOKMessage = value => Promise.resolve({
  value: value.replaceAll(' ', ''),
  message: 'Spaces removed'
})

const ValidateReject = () => Promise.reject(
  "I'm sorry Dave, I'm afraid I can't do that"
)

const ValidateThrow = () => {
  throw('toys thrown out of pram')
}

const ValidateFail = () => fail(
  'big heap of fail'
)

const ValidateStripSpaces = value => value.replaceAll(' ', '')

const ValidateResolveStripSpaces = value => Promise.resolve(
  value.replaceAll(' ', '')
)

const ValidateBadJS = value => {
  const newval = value.nukeAll(' ')     // not a valid function
  // console.log('newval: ', newval)
  return Promise.resolve(newval)
  // Promise.resolve(value.removeAll(' '))
}

it('should validate with Yup',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo" validate={ValidateYupOK} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard(' Hello World ') )
    await act( () => user.click(bar) )

    // field should be valid and input should be trimmed
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('valid')
    expect(foo).toHaveValue('Hello World')
  }
)

it('should fail with Yup',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo" validate={ValidateYup20} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard(' Hello World ') )
    await act( () => user.click(bar) )

    // field should be valid and input should be trimmed
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('invalid')
    expect(foo).toHaveValue(' Hello World ')
    expect(container.getElementsByClassName('help')[0])
      .toHaveTextContent('It must be at least 20 characters')
  }
)

it('should validate OK',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo" validate={ValidateOK} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello World') )
    await act( () => user.click(bar) )

    // field should be valid and input should be unchanged
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('valid')
    expect(foo).toHaveValue('Hello World')
  }
)

it('should validate OK with custom validMessage',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo" validate={ValidateOK} validateOnBlur={true}
          validMessage="This is fine"
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard(' Hello World' ) )
    await act( () => user.click(bar) )

    // field should be valid and input should be unchanged
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('valid')
    expect(container.getElementsByClassName('help')[0])
      .toHaveTextContent('This is fine')
  }
)

it('should validate OK with message',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo" validate={ValidateOKMessage} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard(' Hello World' ) )
    await act( () => user.click(bar) )

    // field should be valid and input should be unchanged
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('valid')
    expect(foo).toHaveValue('HelloWorld')
    expect(container.getElementsByClassName('help')[0])
      .toHaveTextContent('Spaces remove')

  }
)

it('should validate and remove spaces',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo"
          validate={ValidateStripSpaces} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello World') )
    await act( () => user.click(bar) )

    // field should be valid and input should have spaces removed
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('valid')
    expect(foo).toHaveValue('HelloWorld')
  }
)

it('should validate and resolve with spaces removed',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo"
          validate={ValidateResolveStripSpaces} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello World') )
    await act( () => user.click(bar) )

    // field should be valid and input should have spaces removed
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('valid')
    expect(foo).toHaveValue('HelloWorld')
  }
)

it('should reject validation',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo"
          validate={ValidateReject} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello World') )
    await act( () => user.click(bar) )

    // field should be invalid and return an error message
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('invalid')
    expect(container.getElementsByClassName('help')[0])
      .toHaveTextContent("I'm sorry Dave, I'm afraid I can't do that")
  }
)

it('should throw an error on validation',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo"
          validate={ValidateThrow} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello World') )
    await act( () => user.click(bar) )

    // field should be invalid and return an error message
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('invalid')
    expect(container.getElementsByClassName('help')[0])
      .toHaveTextContent('toys thrown out of pram')
  }
)

it('should fail validation',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo"
          validate={ValidateFail} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello World') )
    await act( () => user.click(bar) )

    // field should be invalid and return an error message
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('invalid')
    expect(container.getElementsByClassName('help')[0])
      .toHaveTextContent('big heap of fail')
  }
)

it('should catch JS syntax error',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field
          name="foo" id="foo"
          validate={ValidateBadJS} validateOnBlur={true}
        />
        <Field name="bar" id="bar"/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')

    // focus on foo field, enter some text, then focus on bar
    await act( () => user.click(foo) )
    await act( () => user.keyboard('Hello World') )
    await act( () => user.click(bar) )

    // field should be invalid and return an error message
    const firstField = container.getElementsByClassName('field')[0]
    expect(firstField).toHaveClass('invalid')
    expect(container.getElementsByClassName('help')[0])
      .toHaveTextContent('value.nukeAll is not a function')
  }
)
