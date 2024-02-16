import { Consumer } from './Context.js'

const Changed = ({ status, children }) =>
  status.changed && children

export default Consumer(Changed)
