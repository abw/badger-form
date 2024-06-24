import BaseContext from '../Context.js'
import FormContext from '../Form/Context.js'
import { Generator } from '@abw/react-context'
import { newComplexStatus } from '../Status.js'
import { doNothing } from '@abw/badger-utils'

class ComplexContext extends BaseContext {
  static debug        = true
  static debugPrefix  = props => `Complex [${props.name}] > `
  static debugColor   = 'blue'
  static newStatus    = newComplexStatus
  static actions      = [
    // 'fieldSpec',
    'attachField', 'detachField', 'setValue'
  ]
  constructor(props) {
    super(props)
    this.name = props.name

    const { value } = props
    const initialValue = value

    this.form = this.props.form
    this.fields = { }
    // this.fieldSpec = this.form.fieldSpec
    this.state = {
      ...this.state,
      values: {  },
      initialValue,
      value,
      error: null
    }
    this.debug('initial state:', this.state)

    this.on = {
      load:       this.contextFunction(this.props.onLoad),
      change:     this.contextFunction(this.props.onChange),
      reset:      this.contextFunction(this.props.onReset),
    }
    this.on.load()
  }
  componentDidMount() {
    this.debug('componentDidMount')
    this.mounted = true
    this.form.attachField(this.props.name, this)
  }
  componentWillUnmount() {
    this.debug('componentWillUnmount')
    this.mounted = false
    this.form.detachField(this.props.name)
  }
  contextFunction(fn) {
    return fn
      ? () => fn(this.getContext())
      : doNothing
  }
  attachField(name, field) {
    this.debug(`attaching ${name} field`)
    this.fields[name] = field
    this.setState(
      state => ({
        values: {
          ...state.values,
          [name]: field.state.value
        }
      })
    )
  }
  detachField(name) {
    this.debug(`detaching ${name} field`)
    delete this.fields[name]
  }
  setValue(name, value) {
    this.debug(`setValue(${name}, ${value})`)
    this.setChangedState(
      state => {
        const newValues = {
          ...state.values,
          [name]: value
        }
        this.form.setValue(this.props.name, newValues)
        return {
          ...state,
          values: newValues
        }
      }
    )
  }

  getContext() {
    const context = {
      ...this.props,
      ...this.state,
      ...this.actions,
      name:     this.name,
      fieldSpec: this.form.fieldSpec
    }
    delete context.form
    delete context.children
    delete context.render
    return context
  }
}

const generated = Generator(ComplexContext, { }, FormContext.Context)
export const { Context, Provider, Consumer, Children, Use: useComplex } = generated
export default generated