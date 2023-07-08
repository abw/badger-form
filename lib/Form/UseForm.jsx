import { Consumer } from './Context.jsx'

const UseForm = ({
  children,
  ...props
}) =>
  children(props)

export default Consumer(UseForm)