import { FormErrorObjectProps } from './types'

export const FormErrorObject = ({
  error
}: FormErrorObjectProps) => {
  const label = error.label || error.name
  return (
    <>
      { Boolean(label) && <b>{label}: </b> }
      { error.message }
    </>
  )
}

export default FormErrorObject

