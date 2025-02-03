import DefaultButton from './Button'
import { useForm } from '../Form/Context.js'
import { FormSubmitProps } from '../types'

export const Submit = ({
  type='submit',
  text='Submit',
  className='submit',
  Button=DefaultButton,
  ...props
}: FormSubmitProps) => {
  const { submit, status } = useForm()
  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={submit}
      disabled={status.submitting}
      {...props}
    />
  )
}

export default Submit
