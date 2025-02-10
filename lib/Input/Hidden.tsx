import { isBoolean } from '@abw/badger-utils'
import { useField } from '../Field/Context'

export const Hidden = () => {
  const { name, value } = useField()
  return (
    <input
      type="hidden"
      name={name}
      value={
        isBoolean(value)
          ? (value ? 1 : 0)
          : value
      }
    />
  )
}

export default Hidden

