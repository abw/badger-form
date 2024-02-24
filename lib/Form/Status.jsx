import { Consumer } from './Context.js'
import { hasStatus } from '../Status.js'

const Status = ({
  children,
  ...props
}) =>
  hasStatus(props) && children

export default Consumer(Status)
