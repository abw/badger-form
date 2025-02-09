import { Children } from './Context'
import { UseFormProps } from './types'

export const UseForm = ({
  children
}: UseFormProps) =>
  <Children>
    {children}
  </Children>

export default UseForm