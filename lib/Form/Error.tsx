import ErrorObject from './ErrorObject.js'
import { isString } from '@abw/badger-utils'
import { FormErrorProps } from './types.js'

export const FormError = ({
  error
}: FormErrorProps) =>
  isString(error)
    ? error
    : <ErrorObject error={error}/>

export default FormError

