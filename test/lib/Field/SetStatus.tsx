import { useField } from '@/lib/index'

const SetStatus = () => {
  const {
    setResetState,
    setChangedState,
    setValidatingState,
    setValidState,
    setInvalidState,
    setFocusState,
    setBlurState,
    setDisabledState,
    setEnabledState
  } = useField()
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
      callback={setFocusState}
      id="set-focus-state"
      text="SetFocusState"
    />
    <CallbackButton
      callback={setBlurState}
      id="set-blur-state"
      text="SetBlurState"
    />
    <CallbackButton
      callback={setDisabledState}
      id="set-disabled-state"
      text="SetDisabledState"
    />
    <CallbackButton
      callback={setEnabledState}
      id="set-enabled-state"
      text="SetEnabledState"
    />
  </>
}

const CallbackButton = (
  { callback, id, text }:
  { callback: () => void, id: string, text: string }
) =>
  <button
    onClick={e => { e.preventDefault(); callback() }}
    data-testid={id}
  >
    {text}
  </button>


export default SetStatus