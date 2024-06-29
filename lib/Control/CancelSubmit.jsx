import React from 'react'
import Cancel from './Cancel.jsx'
import Submit from './Submit.jsx'
import { flexGapSpaceClasses } from '../Utils.js'
import { CONTROLS } from '../Constants.jsx'

const CancelSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  cancel={},
  submit={}
}) =>
  <div
    className={flexGapSpaceClasses({ className, gap, space }, size, CONTROLS)}
  >
    <Cancel {...cancel}/>
    <Submit {...submit}/>
  </div>

export default CancelSubmit
