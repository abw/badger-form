import Reset  from './Reset'
import Submit from './Submit'
import { flexGapSpaceClasses } from '../Utils'
import { CONTROLS } from '../Constants'
import { FormResetSubmitProps } from './types'

export const ResetSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  reset={},
  submit={}
}: FormResetSubmitProps) =>
  <div
    className={
      flexGapSpaceClasses(
        { className, gap, space },
        size,
        CONTROLS
      )
    }
  >
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default ResetSubmit
