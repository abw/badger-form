import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form } from '../../lib/index.js'
import Status from '../lib/Form/Status.jsx'
import SetStatus from '../lib/Form/SetStatus.jsx'

describe(
  'Form status',
  () => {
    it(
      'should have an initial status',
      () => {
        render(
          <Form>
            <Status/>
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
        expect(screen.getByTestId('submitting'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('submitted'))
          .toHaveTextContent('FALSE')
      }
    ),
    it(
      'should change status on changed',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
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
        expect(screen.getByTestId('submitting'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('submitted'))
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
        expect(screen.getByTestId('submitting'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('submitted'))
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
        expect(screen.getByTestId('submitting'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('submitted'))
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
        expect(screen.getByTestId('submitting'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('submitted'))
          .toHaveTextContent('FALSE')

        // submitting
        await act( () => userEvent.click(screen.getByTestId('set-submitting-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('submitting'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('submitted'))
          .toHaveTextContent('FALSE')

        // submitted
        await act( () => userEvent.click(screen.getByTestId('set-submitted-state')) )
        expect(screen.getByTestId('changed'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('validating'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('invalid'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('valid'))
          .toHaveTextContent('TRUE')
        expect(screen.getByTestId('submitting'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('submitted'))
          .toHaveTextContent('TRUE')

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
        expect(screen.getByTestId('submitting'))
          .toHaveTextContent('FALSE')
        expect(screen.getByTestId('submitted'))
          .toHaveTextContent('FALSE')
      }
    )
  }
)

