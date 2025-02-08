import { useForm } from '@/lib/index'

{/* START */}
import React  from 'react'
// PRETEND: import { useForm } from '@abw/badger-form'

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button onClick={ e => setFocus(name, e) }>
      {caption}
    </button>
  )
}

export default FieldFocusButton