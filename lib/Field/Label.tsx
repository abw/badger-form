import { useField } from './Context'
import { REQUIRED, OPTIONAL } from '../Constants'
import { LabelCSSProperties } from './types'

const Label = () => {
  const {
    label, labelClass, id,
    required, showRequired, requiredLabel,
    optional, showOptional, optionalLabel
  } = useField()
  const showingRequired = showRequired && required
  const showingOptional = showOptional  && (optional || ! required)
  const hasLabel        = label || showRequired || showOptional

  const style: LabelCSSProperties = { }
  if (showingRequired && requiredLabel !== REQUIRED) {
    style['--required-text'] = `"${requiredLabel}"`
  }
  if (showingOptional && optionalLabel !== OPTIONAL) {
    style['--optional-text'] = `"${optionalLabel}"`
  }

  return hasLabel &&
    <label htmlFor={id} className={labelClass} style={style}>
      {label||<span>&nbsp;</span>}
    </label>
}

export default Label
