import Status from './Status'
import { FormChangedProps } from './types'

export const Changed = ({
  children
}: FormChangedProps) =>
  <Status changed>
    {children}
  </Status>

export default Changed
