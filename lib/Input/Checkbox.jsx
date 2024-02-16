import React from 'react'
import Handlers from './Handlers.js'
import { classes, inputAttrs, inputClasses } from '../Utils.js'
import { useField } from '../Field/Context.js'
// import { Themed } from '../Theme.jsx'

const Checkbox = ({
  field=useField()
}) => {
  const {
    id,
    text,
    inline,
    border,
    labelClass,
    type='checkbox',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)
  const labelClassName = classes('checkbox', labelClass, { inline, border })

  return (
    <label htmlFor={id} className={labelClassName}>
      <input
        type={type}
        ref={field.inputRef}
        aria-disabled={field.disabled}
        tabIndex={field.disabled ? -1 : field.tabIndex}
        onChange={handler(field)}
        className={inputClasses(field)}
        {...attrs}
        checked={field.value}
      />
      {text}
    </label>
  )
}

export default Checkbox
// export default Themed(Checkbox, 'Form.Input.Checkbox')

