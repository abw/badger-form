import { useForm } from '@/lib/index'
import { isBoolean } from '@abw/badger-utils'

const Status = () => {
  const { status } = useForm()
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
    <div data-testid="submitting">
      {BoolVal(status.submitting)}
    </div>
    <div data-testid="submitted">
      {BoolVal(status.submitted)}
    </div>
  </>
}

const BoolVal = (value?: boolean) =>
  isBoolean(value)
    ? (value ? 'TRUE' : 'FALSE')
    : '???'


export default Status