import React  from 'react'
import Reset  from './Reset.jsx'
import Submit from './Submit.jsx'
import { flexGapSpaceClasses } from '../Utils.js'
import { CONTROLS } from '../Constants.jsx'
// import { Themed } from '../Theme.jsx'

const ResetSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  reset={},
  submit={}
}) =>
  <div
    className={flexGapSpaceClasses({ className, gap, space }, size, CONTROLS)}
  >
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default ResetSubmit
// export default Themed(ResetSubmit, 'Form.ResetSubmit')