import React from 'react'
import { useField } from '../Field/Context.js'
import { inputClasses } from '../Utils.js'

const TextArea = ({ field=useField() }) => {
  const { rows=5,cols=20 } = field
  return (
    <textarea
      id={field.id}
      ref={field.inputRef}
      className={inputClasses(field)}
      name={field.name}
      value={field.value}
      disabled={field.disabled}
      aria-disabled={field.disabled}
      tabIndex={field.disabled ? -1 : field.tabIndex}
      placeholder={field.placeholder}
      autoComplete={field.autocomplete}
      onChange={e => field.onChange(e.target.value)}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
      onSelect={field.onSelect}
      rows={rows}
      cols={cols}
    />
  )
}

export default TextArea
