import DefaultLabel from './Label'
import DefaultInput from './Input'
import DefaultMessage from './Message'
import Hidden from '../Input/Hidden'
import { useField } from './Context'
import { fieldClass } from '../Utils'
import { FieldLayoutProps } from './types'

export const Layout = ({
  children
}: FieldLayoutProps) => {
  const field = useField()
  const {
    type,
    Label=DefaultLabel,
    Message=DefaultMessage,
    Input=DefaultInput,
  } = field
  const classes = fieldClass(field)

  // special case for hidden fields which don't need any wrappers
  if (type === 'hidden') {
    return <Hidden/>
  }

  return (
    <div className={classes}>
      { children ||
        <>
          <Label/>
          <Input/>
          <Message/>
        </>
      }
    </div>
  )
}

export default Layout
