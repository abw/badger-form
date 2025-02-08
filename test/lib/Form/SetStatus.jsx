import React from 'react'
import { useForm } from '@/lib/index'

const SetStatus = () => {
  const {
    setResetState,
    setChangedState,
    setValidatingState,
    setValidState,
    setInvalidState,
    setUnvalidatedState,
    setSubmittingState,
    setSubmittedState
  } = useForm()
  return <>
    <CallbackButton
      callback={setResetState}
      id="set-reset-state"
      text="SetResetState"
    />
    <CallbackButton
      callback={setChangedState}
      id="set-changed-state"
      text="SetChangedState"
    />
    <CallbackButton
      callback={setValidatingState}
      id="set-validating-state"
      text="SetValidatingState"
    />
    <CallbackButton
      callback={setInvalidState}
      id="set-invalid-state"
      text="SetInvalidState"
    />
    <CallbackButton
      callback={setValidState}
      id="set-valid-state"
      text="SetValidState"
    />
    <CallbackButton
      callback={setUnvalidatedState}
      id="set-unvalidated-state"
      text="SetUnvalidatedState"
    />
    <CallbackButton
      callback={setSubmittingState}
      id="set-submitting-state"
      text="SetSubmittingState"
    />
    <CallbackButton
      callback={setSubmittedState}
      id="set-submitted-state"
      text="SetSubmittedState"
    />
  </>
}

const CallbackButton = ({callback, id, text}) =>
  <button
    onClick={e => { e.preventDefault(); callback() }}
    data-testid={id}
  >
    {text}
  </button>


export default SetStatus