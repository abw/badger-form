import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, Field } from '@/lib/index'
import Status from '../lib/Field/Status.js'
import SetStatus from '../lib/Field/SetStatus.js'

describe(
  'Field status',
  () => {
    it(
      'field should have an initial status',
      () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
            </Field>
          </Form>
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          focus: false,
          disabled: false,
        })
      }
    )
    it(
      'field changed status',
      async () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
              <SetStatus/>
            </Field>
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
          focus: false,
          disabled: false,
        })
      }
    )
    it(
      'field validating status',
      async () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
              <SetStatus/>
            </Field>
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
          focus: false,
          disabled: false,
        })
      }
    )
    it(
      'field invalid status',
      async () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
              <SetStatus/>
            </Field>
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
          focus: false,
          disabled: false,
        })
      }
    )
    it(
      'field valid status',
      async () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
              <SetStatus/>
            </Field>
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
          focus: false,
          disabled: false,
        })
      }
    )
    it(
      'field focus status',
      async () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
              <SetStatus/>
            </Field>
          </Form>
        )
        await userEvent.click(
          screen.getByTestId('set-focus-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          focus: true,
          disabled: false,
        })
      }
    )
    it(
      'field multi-state changes',
      async () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
              <SetStatus/>
            </Field>
          </Form>
        )
        // initial state
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          focus: false,
          disabled: false,
        })
        // focus
        await userEvent.click(
          screen.getByTestId('set-focus-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          focus: true,
          disabled: false,
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
          focus: true,
          disabled: false,
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
          focus: true,
          disabled: false,
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
          focus: true,
          disabled: false,
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
          focus: true,
          disabled: false,
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
          focus: true,
          disabled: false,
        })
        // blur
        await userEvent.click(
          screen.getByTestId('set-blur-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: true,
          focus: false,
          disabled: false,
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
          focus: false,
          disabled: false,
        })
      }
    )
    it(
      'disabled field',
      async () => {
        render(
          <Form>
            <Field name="foo" disabled>
              <Status/>
              <SetStatus/>
            </Field>
          </Form>
        )
        // initial state
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          focus: false,
          disabled: true,
        })
        // focus
        await userEvent.click(
          screen.getByTestId('set-focus-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          focus: true,
          disabled: true,
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
          focus: true,
          disabled: true,
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
          focus: true,
          disabled: true,
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
          focus: true,
          disabled: true,
        })
        // blur
        await userEvent.click(
          screen.getByTestId('set-blur-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: true,
          focus: false,
          disabled: true,
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
          focus: false,
          disabled: true,
        })
      }
    )
    it(
      'enabled and disable field',
      async () => {
        render(
          <Form>
            <Field name="foo">
              <Status/>
              <SetStatus/>
            </Field>
          </Form>
        )
        // initial state
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          focus: false,
          disabled: false,
        })
        // disabled
        await userEvent.click(
          screen.getByTestId('set-disabled-state')
        )
        expectState({
          changed: false,
          validating: false,
          invalid: false,
          valid: false,
          focus: false,
          disabled: true,
        })
        // focus and changed
        await userEvent.click(
          screen.getByTestId('set-focus-state')
        )
        await userEvent.click(
          screen.getByTestId('set-changed-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: false,
          focus: true,
          disabled: true,
        })
        // enabled
        await userEvent.click(
          screen.getByTestId('set-enabled-state')
        )
        expectState({
          changed: true,
          validating: false,
          invalid: false,
          valid: false,
          focus: true,
          disabled: false,
        })
      }
    )
  }
)

function expectState(state: Record<string, boolean>) {
  Object.entries(state).forEach(
    ([key, expected]) => {
      expect(screen.getByTestId(key))
        .toHaveTextContent(expected ? 'TRUE' : 'FALSE')
    }
  )
}