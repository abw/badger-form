import { useField } from '../Field/Context'
import { inputClasses } from '../Utils'

export const TextArea = () => {
  const field = useField()
  const {
    id,
    name,
    value,
    rows=5,
    cols=20,
    disabled,
    tabIndex,
    placeholder,
    autocomplete,
    onFocus,
    onBlur,
    // onSelect,
    inputRef,
  } = field
  return (
    <textarea
      id={id}
      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
      className={inputClasses(field)}
      name={name}
      value={String(value)}
      disabled={disabled}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : tabIndex}
      placeholder={placeholder}
      autoComplete={autocomplete}
      onChange={e => field.onChange(e.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      // onSelect={onSelect}
      rows={rows}
      cols={cols}
    />
  )
}

export default TextArea
