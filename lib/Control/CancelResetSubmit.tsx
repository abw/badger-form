import Cancel from './Cancel'
import Reset from './Reset'
import Submit from './Submit'
import { flexGapSpaceClasses } from '../Utils'
import { CONTROLS } from '../Constants'
import { FormCancelResetSubmitProps } from '../types'

export const CancelResetSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  cancel={},
  reset={},
  submit={}
}: FormCancelResetSubmitProps) =>
  <div
    className={
      flexGapSpaceClasses(
        { className, gap, space },
        size,
        CONTROLS
      )
    }
  >
    <Cancel {...cancel}/>
    <Reset {...reset}/>
    <Submit {...submit}/>
  </div>

export default CancelResetSubmit
