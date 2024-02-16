import React from 'react'
import Cancel from './Cancel.jsx'
import Submit from './Submit.jsx'
import { flexGapSpaceClasses } from '../Utils.js'
import { CONTROLS } from '../Constants.jsx'
// import { Themed } from '../Theme.jsx'

const CancelSubmit = ({
  className,
  gap=4,
  space=false,
  cancel={},
  submit={}
}) =>
  <div className={flexGapSpaceClasses({ className, gap, space }, CONTROLS)}>
    <Cancel {...cancel}/>
    <Submit {...submit}/>
  </div>

export default CancelSubmit
// export default Themed(CancelSubmit, 'Form.CancelSubmit')