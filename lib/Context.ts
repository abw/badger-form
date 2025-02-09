import { Context as BaseContext } from '@abw/react-context'
import { doNothing, isFunction } from '@abw/badger-utils'
import { CHANGED, INVALID, RESET, UNVALIDATED, VALID, VALIDATING } from './Constants'

// Base class for form and field contexts that has function to set status
// NO LONGER USED - it was easier to copy-n-paste these base class methods
// into the Form and Field contexts than try to wrangle the generics down
// to the BaseContext from @abw/react-context

class Context extends BaseContext {
  constructor(props) {
    super(props)
    this.newStatus = this.constructor.newStatus(props)
    this.state = {
      status: this.newStatus(RESET)
    }
  }
  setStatus(status, addState={}, callback=doNothing) {
    if (! this.mounted) {
      return
    }
    this.setState(
      oldState => ({
        ...(isFunction(addState) ? addState(oldState) : addState),
        status: this.newStatus(status, oldState.status)
      }),
      callback
    )
  }
  setResetState(state, callback) {
    this.setStatus(RESET, state, callback)
  }
  setChangedState(state, callback) {
    this.setStatus(CHANGED, state, callback)
  }
  setValidatingState(state, callback) {
    this.setStatus(VALIDATING, state, callback)
  }
  setInvalidState(state, callback) {
    this.setStatus(INVALID, state, callback)
  }
  setValidState(state, callback) {
    this.setStatus(VALID, state, callback)
  }
  setUnvalidatedState(state, callback) {
    this.setStatus(UNVALIDATED, state, callback)
  }
}

export default Context
