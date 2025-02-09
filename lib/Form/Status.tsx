import { useForm } from './Context'
import { formHasStatus } from '../Status'
import { FormStatusProps } from './types'

export const Status = ({
  children,
  ...props
}: FormStatusProps) => {
  const { status } = useForm()
  return formHasStatus({
    ...props,
    status
  })
    ? children
    : null
}

export default Status
