import React from 'react'
import { useForm } from '@/lib/index.js'
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

const BoolVal = value =>
  isBoolean
    ? (value ? 'TRUE' : 'FALSE')
    : '???'


export default Status