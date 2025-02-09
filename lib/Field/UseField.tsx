import { Children } from './Context'
import { UseFieldProps } from './types'

export const UseField = ({
  children
}: UseFieldProps) =>
  <Children>
    {children}
  </Children>

export default UseField