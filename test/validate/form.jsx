import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field, Submit } from '@/lib/index'
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
  return Promise.resolve(value.nukeAll())
}

it('should validate all fields',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Form>
        <Field name="foo" id="foo" className="foo" validate={ValidateYupOK}/>
        <Field name="bar" id="bar" className="bar" validate={ValidateYup20}/>
        <Field name="baz" id="baz" className="baz" validate={ValidateOK}/>
        <Field name="boz" id="boz" className="boz" validate={ValidateOK} validMessage="This is fine"/>
        <Field name="wig" id="wig" className="wig" validate={ValidateOKMessage}/>
        <Field name="wam" id="wam" className="wam" validate={ValidateStripSpaces}/>
        <Field name="bam" id="bam" className="bam" validate={ValidateResolveStripSpaces}/>
        <Field name="zig" id="zig" className="zig" validate={ValidateReject}/>
        <Field name="zag" id="zag" className="zag" validate={ValidateThrow}/>
        <Field name="zog" id="zog" className="zog" validate={ValidateFail}/>
        <Field name="zug" id="zug" className="zug" validate={ValidateBadJS}/>
        <Field name="opt" id="opt" className="opt" optional validate={ValidateReject}/>
        <Submit/>
      </Form>
    )
    const foo = container.querySelector('#foo')
    const bar = container.querySelector('#bar')
    const wig = container.querySelector('#wig')
    const wam = container.querySelector('#wam')
    const bam = container.querySelector('#bam')

    // focus on foo field, enter some text
    await act( () => user.click(foo) )
    await act( () => user.keyboard(' Hello World ') )

    // focus on bar field, enter some text
    await act( () => user.click(bar) )
    await act( () => user.keyboard(' Hello World ') )

    // focus on wig field, enter some text
    await act( () => user.click(wig) )
    await act( () => user.keyboard(' Hello World ') )

    // focus on wam field, enter some text
    await act( () => user.click(wam) )
    await act( () => user.keyboard(' Breathe, breathe in the air ') )

    // focus on bam field, enter some text
    await act( () => user.click(bam) )
    await act( () => user.keyboard(" Don't be afraid to care ") )

    // submit the form
    const button = await screen.getByRole('button', { name: /submit/i })
    // await act( () => user.click(button) )
    await user.click(button)

    // foo field should be valid and input should be trimmed
    const fooField = container.getElementsByClassName('foo')[0]
    expect(foo).toHaveValue('Hello World')
    expect(fooField).toHaveClass('valid')

    // bar field should be invalid and message displayed
    const barField = container.getElementsByClassName('bar')[0]
    expect(bar).toHaveValue(' Hello World ')
    expect(barField).toHaveClass('invalid')
    expect(barField.getElementsByClassName('help')[0])
      .toHaveTextContent('It must be at least 20 characters')

    // baz field should be valid
    const bazField = container.getElementsByClassName('baz')[0]
    expect(bazField).toHaveClass('valid')

    // boz field should be valid with custom valid message
    const bozField = container.getElementsByClassName('boz')[0]
    expect(bozField).toHaveClass('valid')
    expect(bozField.getElementsByClassName('help')[0])
      .toHaveTextContent('This is fine')

    // wig field should be valid, have all spaces removed and message displayed
    const wigField = container.getElementsByClassName('wig')[0]
    expect(wig).toHaveValue('HelloWorld')
    expect(wigField).toHaveClass('valid')
    expect(wigField.getElementsByClassName('help')[0])
      .toHaveTextContent('Spaces removed')

    // wam field should be valid, have all spaces removed
    const wamField = container.getElementsByClassName('wam')[0]
    expect(wam).toHaveValue('Breathe,breatheintheair')
    expect(wamField).toHaveClass('valid')

    // wam field should be valid, have all spaces removed
    const bamField = container.getElementsByClassName('bam')[0]
    expect(bam).toHaveValue("Don'tbeafraidtocare")
    expect(bamField).toHaveClass('valid')

    // zig field should be invalid with message
    const zigField = container.getElementsByClassName('zig')[0]
    expect(zigField).toHaveClass('invalid')
    expect(zigField.getElementsByClassName('help')[0])
      .toHaveTextContent("I'm sorry Dave, I'm afraid I can't do that")

    // zag field should be invalid with message
    const zagField = container.getElementsByClassName('zag')[0]
    expect(zagField).toHaveClass('invalid')
    expect(zagField.getElementsByClassName('help')[0])
      .toHaveTextContent('toys thrown out of pram')

    // zog field should be invalid with message
    const zogField = container.getElementsByClassName('zog')[0]
    expect(zogField).toHaveClass('invalid')
    expect(zogField.getElementsByClassName('help')[0])
      .toHaveTextContent('big heap of fail')

    // zug field should be invalid with message
    const zugField = container.getElementsByClassName('zug')[0]
    expect(zugField).toHaveClass('invalid')
    expect(zugField.getElementsByClassName('help')[0])
      .toHaveTextContent('value.nukeAll is not a function')

    // optional field should be OK when empty
    const optField = container.getElementsByClassName('opt')[0]
    expect(optField).toHaveClass('valid')
  }
)
