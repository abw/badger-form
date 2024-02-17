import React from 'react'
import { useField } from '@/lib/index.js'
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
  </>
}

const BoolVal = value =>
  isBoolean
    ? (value ? 'TRUE' : 'FALSE')
    : '???'


export default Status