import { useField } from '@/lib/index'
import { isBoolean } from '@abw/badger-utils'

const Status = () => {
  const { status } = useField()
  return <>
    <div data-testid="changed">
      {BoolVal(status.changed)}
    </div>
    <div data-testid="validating">
      {BoolVal(status.validating)}
    </div>
    <div data-testid="invalid">
      {BoolVal(status.invalid)}
    </div>
    <div data-testid="valid">
      {BoolVal(status.valid)}
    </div>
    <div data-testid="focus">
      {BoolVal(status.focus)}
    </div>
    <div data-testid="disabled">
      {BoolVal(status.disabled)}
    </div>
  </>
}

const BoolVal = (value?: boolean) =>
  isBoolean(value)
    ? (value ? 'TRUE' : 'FALSE')
    : '???'


export default Status