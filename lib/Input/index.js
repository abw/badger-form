export * from './Handlers.js'
export { default as Checkbox } from './Checkbox.jsx'
export { default as Hidden   } from './Hidden.jsx'
export { default as Radio    } from './Radio.jsx'
export { default as Select   } from './Select.jsx'
export { default as Text     } from './Text.jsx'
export { default as TextArea } from './Textarea.jsx'

import { canonicalInputTypeName } from '../Utils'
import Checkbox from './Checkbox.jsx'
import Hidden   from './Hidden.jsx'
import Radio    from './Radio.jsx'
import Select   from './Select.jsx'
import Text     from './Text.jsx'
import TextArea from './Textarea.jsx'

export const InputTypes  = {
  default:  Text,
  checkbox: Checkbox,
  hidden:   Hidden,
  radio:    Radio,
  select:   Select,
  text:     Text,
  textarea: TextArea,
}

export const addInputType = (name, Input) =>
  InputTypes[canonicalInputTypeName(name)] = Input

export const addInputTypes = types =>
  Object.entries(types).forEach(
    entry => addInputType(...entry)
  )

export const getInputType = (name='text') =>
  InputTypes[canonicalInputTypeName(name)] || InputTypes.default

export default InputTypes