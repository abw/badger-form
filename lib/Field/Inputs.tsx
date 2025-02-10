import DefaultPrefix from './Prefix'
import DefaultSuffix from './Suffix'
import { getInputType } from '../Input/index'
import { useField } from './Context'
import { hasValue } from '@abw/badger-utils'
import { TEXT } from '../Constants'

const Inputs = () => {
  const field = useField()
  const {
    // classes,
    prefix,
    suffix,
    inputsClass,
    inline,
    type=TEXT,
    Prefix=DefaultPrefix,
    Suffix=DefaultSuffix,
  } = field
  const Type = getInputType(type)
  const classNames = [
    // selectClass(classes, 'inputs'),
    'inputs'
  ]
  if (hasValue(prefix)) {
    // classNames.push(selectClass(classes, 'prefixed'))
    classNames.push('prefixed')
  }
  if (hasValue(suffix)) {
    // classNames.push(selectClass(classes, 'suffixed'))
    classNames.push('suffixed')
  }
  if (inline) {
    // classNames.push(selectClass(classes, 'inline'))
    classNames.push('inline')
  }
  if (hasValue(inputsClass)) {
    classNames.push(inputsClass)
  }
  const className = classNames.join(' ')

  return (
    <div className={className}>
      { hasValue(prefix) && <Prefix/> }
      <Type/>
      { hasValue(suffix) && <Suffix/> }
    </div>
  )
}

export default Inputs
