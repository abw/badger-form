import { useField } from '../Field/Context.js'
import { inputAttrs, classes, valueOption } from '../Utils.js'

export const Radio = () => {
  const field = useField()
  const {
    inline,
    border,
    value,
    options=[],
    inputClass,
    optionClass,
    optionsClass='options',
    type='radio',
    inputRef,
    disabled,
    tabIndex,
    onChange,
    // handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <div className={classes(optionsClass)}>
      { options.map(
        (option, i) => {
          option = valueOption(option)
          const id = `${field.id}-${option.value}`
          const checked = value == option.value
          // when we focus the field we want to focus the currently selected
          // option (if there is one) or the first option otherwise
          const focus = value ? checked : i == 0
          const ref = focus ? inputRef : null
          const labelClass = classes(
            'radio',
            optionClass,
            option.className,
            { inline, border }
          )
          return (
            <label
              key={option.value}
              className={labelClass}
              // disabled={option.disabled}
              htmlFor={id}
            >
              <input
                type={type}
                className={inputClass}
                // ref={field.inputRef}
                ref={ref as React.RefObject<HTMLInputElement>}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : tabIndex}
                // onChange={handler(field)}
                onChange={e => onChange(e.target.value)}
                {...attrs}
                id={id}
                checked={checked}
                value={option.value ?? undefined}
              />
              {option.text}
            </label>
          )
        }
      )}
    </div>
  )
}

export default Radio
