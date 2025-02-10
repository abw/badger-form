import Inputs from './Inputs.js'
import { getInputType } from '../Input/index'
import { useField } from './Context'
import { hasValue } from '@abw/badger-utils'
import { RADIO, TEXT } from '../Constants'

const Input = () => {
  const field = useField()
  const {
    prefix,
    suffix,
    type=TEXT,
  } = field
  const Type = getInputType(type)

  if (type == RADIO) {
    return <Type/>
  }
  if (hasValue(prefix) || hasValue(suffix)) {
    return <Inputs/>
  }
  return (
    <Type/>
  )
}

export default Input
