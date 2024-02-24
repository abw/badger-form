import React from 'react'
import Status from './Status.jsx'

const Changed = (props) =>
  <Status changed {...props}/>

export default Changed
/*
import { Consumer } from './Context.js'

const Changed = ({ status, children }) =>
  status.changed && children

export default Consumer(Changed)
*/