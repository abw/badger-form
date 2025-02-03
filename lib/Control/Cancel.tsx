import { FormCancelProps } from '../types'
import DefaultButton from './Button'

export const Cancel = ({
  text='Cancel',
  className='cancel',
  Button=DefaultButton,
  ...props
}: FormCancelProps) =>
  <Button
    text={text}
    className={className}
    {...props}
  />

export default Cancel
