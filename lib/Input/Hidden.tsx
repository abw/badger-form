import { isBoolean, isNumber } from '@abw/badger-utils'
import { useField } from '../Field/Context'

interface HiddenProps {
  name?: string
  value?: boolean | number | string
}

export const Hidden = (props: HiddenProps) => {
  const { name = props.name, value = props.value } = useField()
  return (
    <input
      type="hidden"
      name={name}
      value={
        isBoolean(value)
          ? (value ? 1 : 0)
          : isNumber(value)
            ? value
            : String(value)
      }
    />
  )
}

export default Hidden

