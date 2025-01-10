import { Consumer } from './Context.js'
import { hasStatus } from '../Status'

const Status = ({
  children,
  ...props
}) =>
  hasStatus(props) && children

export default Consumer(Status)
