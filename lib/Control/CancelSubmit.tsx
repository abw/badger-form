import Cancel from './Cancel'
import Submit from './Submit'
import { flexGapSpaceClasses } from '../Utils'
import { CONTROLS } from '../Constants'
import { FormCancelSubmitProps } from './types'

export const CancelSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  cancel={},
  submit={}
}: FormCancelSubmitProps) =>
  <div
    className={flexGapSpaceClasses({ className, gap, space }, size, CONTROLS)}
  >
    <Cancel {...cancel}/>
    <Submit {...submit}/>
  </div>

export default CancelSubmit
