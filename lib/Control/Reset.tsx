import DefaultButton from './Button'
import { useForm } from '../Form/Context'
import { FormResetProps } from './types'

export const Reset = ({
  type='reset',
  text='Reset',
  className='reset',
  Button=DefaultButton,
  ...props
}: FormResetProps) => {
  const { reset } = useForm()
  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={reset}
      {...props}
    />
  )
}

export default Reset
