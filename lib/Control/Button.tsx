import { FormButtonProps } from '../types'

export const Button = ({
  onClick,
  children,
  text='Button',
  type='button',
  ...props
}: FormButtonProps) =>
  <button
    type={type}
    onClick={onClick}
    {...props}
  >
    {children||text}
  </button>

export default Button

