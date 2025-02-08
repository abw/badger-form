import { Consumer } from './Context'
import { hasStatus } from '../Status'

const Status = ({
  children,
  ...props
}) =>
  hasStatus(props) && children

export default Consumer(Status)
