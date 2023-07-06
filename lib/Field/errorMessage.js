import { hasValue, isFunction } from '@abw/badger-utils'

const errorMessages = {
  default:   'Invalid input',
  min:       field => `Minimum value is ${field.min}`,
  max:       field => `Minimum value is ${field.max}`,
  minLength: field => `Minimum length is ${field.minLength}`,
  maxLength: field => `Maximum length is ${field.maxLength}`,
}

const errorMessage = (error, field) => {
  if (! error) {
    return null
  }
  const { type, message } = error
  if (hasValue(message) && message.length) {
    return message
  }
  const { messages={} } = field
  const formats = {
    ...errorMessages,
    ...messages
  }
  const format = formats[type] || formats.default
  return isFunction(format)
    ? format(field)
    : format
}


export default errorMessage