import { FORM_ATTRS, INPUT_ATTRS } from './Constants'
import { FieldValue, SelectOptionObject } from './Field/types'
import { hasValue, isArray, isBoolean, isNumber, isObject, isString, noValue } from '@abw/badger-utils'
import { CSSClassHash, CSSClassItem, CSSClassProps, FlexGridProps, VoidFunction } from './types'

/**
 * Coerces a non-array value into a single element array.
 * @example
 * toArray(10)   // => [10]
 * @example
 * toArray([20]) // => [20]
 */
export const toArray = (item: unknown) =>
  isArray(item)
    ? item
    : [item]

/**
 * React insists on properties being in camelCase, but sane people might want
 * to specify the fields using normal HTML case, e.g. autoComplete vs
 * autocomplete.  Given a set of `props`, this will extract all the properties
 * named in `list`, where they appear in `props` either in the original camel
 * case or lower case.
 * @example
 * attrs({ camelCase: 11, foo: 99 }, ['camelCase'])
 * // => { camelCase: 11}
 * @example
 * attrs({ camelcase: 11, foo: 99 }, ['camelCase'])
 * // => { camelCase: 11}
 */
export function attrs(props: Record<string, unknown>, list: string[]) {
  return list.reduce(
    (hash, a) => {
      const value = props[a] || props[a.toLowerCase()]
      if (hasValue(value)) {
        hash[a] = value
      }
      return hash
    },
    { } as Record<string, unknown>
  )
}

/**
 * Extract all the standard input attributes from `field`
 */
export const inputAttrs = (field: Record<string, unknown>) => attrs(field, INPUT_ATTRS)

/**
 * Extract all the standard form attributes from `form`
 */
export const formAttrs  = (form: Record<string, unknown>) => attrs(form, FORM_ATTRS)


/**
 * Combine all the defined and non-null strings in the `classes` array into a
 * single whitespace delimited string.
 * @example
 * joinClasses(['foo', 'bar', null, 'baz'])
 * // => 'foo bar baz'
 */
export const joinClasses = (classes: Array<CSSClassItem>) =>
  classes.filter(hasValue).join(' ')

/**
 * Returns an array of all keys in `props` for which the corresponding values
 * are truthy.
 * @example
 * setKeys({ a: 10, b: null, c: false, d: true })
 * // => ['a', 'd']
 */
export const setKeys = (props: CSSClassHash) =>
  Object.entries(props)
    .filter( ([ , value]) => value )
    .map( ([key]) => key )

/**
 * Combines one or more inputs into a single whitespace delimited CSS class
 * string.  The inputs can be strings, objects or undefined/null values which
 * are ignored.  For objects, they are passed through {@link setKeys} to
 * extract any keys for which the corresponding values are truthy.
 * are truthy.
 * @example
 * classes({ a: 10, b: null, c: false, d: true }, 'e', null, 'f')
 * // => 'a d e f'
 */
export const classes = (...inputs: CSSClassProps) =>
  joinClasses(
    inputs.flatMap(
      input =>
        isObject(input)
          ? setKeys(input)
          : input
    )
  )

/**
 * Determine the CSS classes for an input from the field specification.
 */
export const inputClasses = (
  field: Record<string, unknown>,
  ...more: CSSClassProps
) =>
  classes(
    field.inputClass as string,
    field.inline ? 'inline' : null,
    ...more
  )

/**
 * Determine the CSS classes for a select input from the field specification.
 */
export const selectClass = (
  classes: Record<string, string> | undefined,
  name: string,
  defaultClass=name
) =>
  classes?.[name] || defaultClass

/**
 * Determine the CSS classes based on a field status.
 */
export const statusClasses = (
  status: Record<string, boolean>,
  classes: Record<string, string> = { },
  ...more: Array<CSSClassItem>
) =>
  joinClasses(
    Object.entries(status).reduce(
      (all, [name, set]) => {
        if (set) {
          all.push(classes[name] || name)
        }
        return all
      },
      [...more]
    )
  )

/**
 * Determine the CSS classes for a field
 */
// FIXME
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fieldClass = (field: Record<string, any>) => {
  const {
    status,
    className,
    classes,
    required,
    showRequired,
    showOptional,
    // inline
  } = field
  return statusClasses(
    status,
    classes,
    selectClass(classes, 'field'),
    className,
    // inline ? 'inline' : null,
    (showRequired && required) ? 'required' : null,
    (showOptional && ! required) ? 'optional' : null,
  )
}

/**
 * Determine the CSS classes for a flex layout
 */
export const flexGapSpaceClasses = (
  props: FlexGridProps,
  ...more: Array<CSSClassItem>
) => {
  const { gap, space, stack, className } = props
  return className
    ? className
    : space
      ? classes('flex', 'space', ...more)
      : classes(
        'flex',
        (gap   ? `gap-v-none gap-h-${gap}`   : null),
        (stack ? `stack-${stack}` : null),
        ...more
      )
}

/**
 * Determine the CSS classes for a grid layout
 */
export const gridGapClasses = (
  props: FlexGridProps,
  ...more: Array<CSSClassItem>
) => {
  const { grid, gap, stack, className } = props
  return className
    ? className
    : grid
      ? classes(
        `grid-${grid}`,
        (gap   ? `gap-v-none gap-h-${gap}`   : null),
        (stack ? `stack-${stack}` : null),
        ...more
      )
      : classes(...more)
}

export const valueTypes: Record<string, boolean> = {
  boolean: true,
  string:  true,
  number:  true,
}

/**
 * Select options can be defined as an array of simple booleans, strings, or
 * numbers, otherwise they must be objects containing `value` and `text`.
 * This function returns `true` if the `option` is a suitable simple type.
 */
export const valueOption = (option: unknown): SelectOptionObject =>
  valueTypes[typeof option]
    ? { value: option as string | number, text: String(option)} // FIXME
    : option as SelectOptionObject

/**
 * Calls a sequence of one or more function
 */
export const callFunctions = (...functions: Array<VoidFunction|undefined>) =>
  function() {
    for (const fn of functions.filter(hasValue)) {
      fn()
    }
  }
/*
export const callFunctions = (...functions: Array<(...args: unknown[]) => void>) =>
  function(...args: unknown[]) {
    for (const fn of functions.filter(Boolean)) {
      fn(...args)
    }
  }
*/
/**
 * Returns an array of `[length, empty]` for different data types indicating
 * if the value has a length and represents an empty value.  For a boolean,
 * it has a length of 1 and is not empty.  For a string or number which can
 * be represented as a string, the length is the string length and empty is
 * a boolean flag indicating if the length is 0.  For other values (null and
 * undefined), then length is always 0 and empty is `true`.
 */
export function lengthEmpty(
  value: FieldValue
): [number, boolean] {
  if (isBoolean(value)) {
    return [1, false]
  }
  else if (hasValue(value)) {
    const length = value?.toString().length ?? 0
    const empty  = length === 0
    return [length, empty]
  }
  return [0, true]
}


/**
 * Converts a `string` to an object indexed by `key`.  If the value isn't
 * a string then it's returned unmodified.
 * @example
 * stringToObject('Hello', 'message')
 * // => { message: 'Hello' }
 * @example
 * stringToObject({ greeting: 'Hello' }, 'message')
 * // => { greeting: 'Hello' }
 */
export const stringToObject = (string: string | unknown, key: string) =>
  isString(string)
    ? { [key]: string }
    : string

/**
 * Returns a canonical version of a
 * a string then it's returned unmodified.
 */
export const canonicalInputTypeName = (name: string) =>
  name.replaceAll(/\W+/g, '').toLowerCase()

/*
export const preventDefault1 = <EventType extends Event>
  (fn: (...args: unknown[]) => void) =>
    (e: EventType, ...args: unknown[]) => {
      e.preventDefault()
      fn(...args)
    }

// Can't make this work generically :-(
export const preventDefault = <
  EventType extends MouseEvent = MouseEvent,
  Args extends unknown[] = [ ]
>
  (fn: (...args: Args) => void) =>
    (e: EventType, ...args: Args) => {
      e.preventDefault()
      fn(...args)
    }
*/

export const selectValue = (value: FieldValue) =>
  noValue(value)
    ? undefined
    : isBoolean(value)
      ? (value ? 1 : 0)
      : isNumber(value)
        ? value
        : String(value)
