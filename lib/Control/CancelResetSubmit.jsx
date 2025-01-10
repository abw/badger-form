import React from 'react'
import Cancel from './Cancel.jsx'
import Reset from './Reset.jsx'
import Submit from './Submit.jsx'
import { flexGapSpaceClasses } from '../Utils'
import { CONTROLS } from '../Constants'

const CancelResetSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  cancel={},
  reset={},
  submit={}
}) =>
  <div
    className={flexGapSpaceClasses({ className, gap, space }, size, CONTROLS)}
  >
    <Cancel {...cancel}/>
    <Reset {...reset}/>
    <Submit {...submit}/>
  </div>

export default CancelResetSubmit
