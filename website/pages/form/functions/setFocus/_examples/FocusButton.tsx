import { useForm } from '@/lib/index'

{/* START */}
// PRETEND: import { useForm } from '@abw/badger-form'

interface FieldFocusButtonProps {
  name: string
  caption: string
}

const FieldFocusButton = (
  { name, caption }: FieldFocusButtonProps
) => {
  const { setFocus } = useForm()
  return (
    <button onClick={ e => setFocus(name, e) }>
      {caption}
    </button>
  )
}

export default FieldFocusButton