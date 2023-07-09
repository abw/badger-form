import React from 'react'
import Reset from './Reset.jsx'
import Submit from './Submit.jsx'

export const ResetSubmit = ({
  className='flex gap-4 controls',
  reset={},
  submit={}
}) =>
  <div className={className}>
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default ResetSubmit