import React from 'react'
import Reset from './Reset.jsx'
import Submit from './Submit.jsx'
import { flexGapSpaceClasses } from '../Utils.js'

export const ResetSubmit = ({
  className,
  gap=4,
  space=false,
  reset={},
  submit={}
}) =>
  <div className={flexGapSpaceClasses({ className, gap, space }, 'controls')}>
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default ResetSubmit