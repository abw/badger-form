import { hasValue, isArray, isObject } from '@abw/badger-utils'
import { INPUT_ATTRS } from './Constants.jsx'

export const toArray = item =>
  isArray(item)
    ? item
    : [item]

export function attrs(props, list) {
  return list.reduce(
    (hash, a) => {
      if (hasValue(props[a])) {
        hash[a] = props[a]
      }
      return hash
    },
    { }
  )
}

export const inputAttrs = field => attrs(field, INPUT_ATTRS)
export const joinClasses = classes => classes.filter(hasValue).join(' ')
export const setKeys = props =>
  Object.entries(props)
    .filter( ([ , value]) => value )
    .map( ([key]) => key )

export const classes = (...inputs) => joinClasses(
  inputs.flatMap(
    input =>
      isObject(input)
        ? setKeys(input)
        : input

  )
)

export const flexGapSpaceClasses = (props, ...more) => {
  const { gap, space, className } = props
  return className
    ? className
    : space
      ? classes('flex', 'space', ...more)
      : classes('flex', `gap-${gap}`, ...more)
}

export const gridGapClasses = (props, ...more) => {
  const { grid, gap, className } = props
  return className
    ? className
    : grid
      ? classes(`grid-${grid}`, `gap-h-${gap}`, ...more)
      : classes(...more)
}

// options can be defined as an array of simple booleans, strings, or numbers,
// e.g. options = [ true, 'yes', 23 ], otherwise they must be objects
// containing value and text, e.g. options = [ { value: 11, text: 'eleven}, ... ]
export const valueTypes = {
  boolean: true,
  string:  true,
  number:  true,
}

export const valueOption = option =>
  valueTypes[typeof option]
    ? { value: option, text: option }
    : option
