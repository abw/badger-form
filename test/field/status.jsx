import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import Status from '../lib/Field/Status.jsx'
import SetStatus from '../lib/Field/SetStatus.jsx'

describe(
  'Field status',
  () => {
    it(
      'should have an initial status',
      () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
            </Field>
          </Form>
        )
        // screen.debug()
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('focus'))
          .toHaveTextContent('FALSE')
      }
    )
    it(
      'should change status on changed',
      async () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
              <SetStatus/>
            </Field>
          </Form>
        )
        // screen.debug()
        // changed
        await act( () => userEvent.click(screen.getByTestId('set-changed-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('focus'))
          .toHaveTextContent('FALSE')

        // validating
        await act( () => userEvent.click(screen.getByTestId('set-validating-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('focus'))
          .toHaveTextContent('FALSE')

        // invalid
        await act( () => userEvent.click(screen.getByTestId('set-invalid-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('focus'))
          .toHaveTextContent('FALSE')

        // valid
        await act( () => userEvent.click(screen.getByTestId('set-valid-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('focus'))
          .toHaveTextContent('FALSE')

        // focus
        await act( () => userEvent.click(screen.getByTestId('set-focus-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('focus'))
          .toHaveTextContent('TRUE')

        // blur
        await act( () => userEvent.click(screen.getByTestId('set-blur-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('focus'))
          .toHaveTextContent('FALSE')

        // reset
        await act( () => userEvent.click(screen.getByTestId('set-reset-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('focus'))
          .toHaveTextContent('FALSE')
      }
    )
  }
)

