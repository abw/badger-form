import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form } from '@/lib/index'
import Status from '../lib/Form/Status'
import SetStatus from '../lib/Form/SetStatus'

describe(
  'Form status',
  () => {
    it(
      'form should have an initial status',
      () => {
        render(
          <Form>
            <Status/>
          </Form>
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
      }
    ),
    it(
      'form changed status',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
          </Form>
        )
        await userEvent.click(
          screen.getByTestId('set-changed-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
      }
    ),
    it(
      'form validating status',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
          </Form>
        )
        await userEvent.click(
          screen.getByTestId('set-validating-state')
        )
        expectState({
          changed: false,
          validating: true,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
      }
    ),
    it(
      'form invalid status',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
          </Form>
        )
        await userEvent.click(
          screen.getByTestId('set-invalid-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: true,
          valid: false,
          submitting: false,
          submitted: false,
        })
      }
    ),
    it(
      'form valid status',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
          </Form>
        )
        await userEvent.click(
          screen.getByTestId('set-valid-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: true,
          submitting: false,
          submitted: false,
        })
      }
    ),
    it(
      'form submitting status',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
          </Form>
        )
        await userEvent.click(
          screen.getByTestId('set-submitting-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          submitting: true,
          submitted: false,
        })
      }
    ),
    it(
      'form submitted status',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
          </Form>
        )
        await userEvent.click(
          screen.getByTestId('set-submitted-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: true,
        })
      }
    ),
    it(
      'form reset status',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
          </Form>
        )
        await userEvent.click(
          screen.getByTestId('set-reset-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
      }
    ),
    it(
      'form multi-status changes',
      async () => {
        render(
          <Form>
            <SetStatus/>
            <Status/>
          </Form>
        )
        // initial state
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
        // changed
        await userEvent.click(
          screen.getByTestId('set-changed-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
        // validating
        await userEvent.click(
          screen.getByTestId('set-validating-state')
        )
        expectState({
          changed: true,
          validating: true,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
        // invalid
        await userEvent.click(
          screen.getByTestId('set-invalid-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: true,
          valid: false,
          submitting: false,
          submitted: false,
        })
        // validating
        await userEvent.click(
          screen.getByTestId('set-validating-state')
        )
        expectState({
          changed: true,
          validating: true,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
        // valid
        await userEvent.click(
          screen.getByTestId('set-valid-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: true,
          submitting: false,
          submitted: false,
        })
        // submitting
        await userEvent.click(
          screen.getByTestId('set-submitting-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: true,
          submitting: true,
          submitted: false,
        })
        // submitted
        await userEvent.click(
          screen.getByTestId('set-submitted-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: true,
          submitting: false,
          submitted: true,
        })
        // reset
        await userEvent.click(
          screen.getByTestId('set-reset-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          submitting: false,
          submitted: false,
        })
      }
    )
  }
)

function expectState(state) {
  Object.entries(state).forEach(
    ([key, expected]) => {
      expect(screen.getByTestId(key))
        .toHaveTextContent(expected ? 'TRUE' : 'FALSE')
    }
  )
}