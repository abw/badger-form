export * from './Handlers'
export * from './Checkbox'
export * from './Hidden'
export * from './Radio'
export * from './Select'
export * from './Text'
export * from './Textarea'

import { canonicalInputTypeName } from '../Utils'
import Checkbox from './Checkbox'
import Hidden   from './Hidden'
import Radio    from './Radio'
import Select   from './Select'
import Text     from './Text'
import TextArea from './Textarea'

type InputTypesTable = Record<string, React.FC>

// FIXME: React.FC should have typed props
export const InputTypes: InputTypesTable  = {
  default:  Text,
  checkbox: Checkbox,
  hidden:   Hidden,
  radio:    Radio,
  select:   Select,
  text:     Text,
  textarea: TextArea,
}

export const addInputType = (
  name: string,
  Input: React.FC
) =>
  InputTypes[canonicalInputTypeName(name)] = Input

export const addInputTypes = (types: InputTypesTable) =>
  Object.entries(types).forEach(
    entry => addInputType(...entry)
  )

export const getInputType = (name='text') =>
  InputTypes[canonicalInputTypeName(name)] || InputTypes.default

export default InputTypes