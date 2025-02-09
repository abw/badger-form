import DefaultButton from './Button'
import { useForm } from '../Form/Context'
import { FormSubmitProps } from './types'
import { MouseEvent, useMemo } from 'react'

export const Submit = ({
  type='submit',
  text='Submit',
  className='submit',
  Button=DefaultButton,
  ...props
}: FormSubmitProps) => {
  const { submit, status } = useForm()
  const onClick = useMemo(
    () => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      submit()
    },
    [submit]
  )
  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={onClick}
      disabled={status.submitting}
      {...props}
    />
  )
}

export default Submit
