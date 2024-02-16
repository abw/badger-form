import React from 'react'

export const FormErrorObject = ({ error }) => {
  const label = error.label || error.name
  return (
    <>
      { Boolean(label) && <b>{label}: </b> }
      { error.message }
    </>
  )
}

export default FormErrorObject

