import React from 'react'
import { FieldMinValidateLengthLink } from '@/website/site/Links.jsx'

const MinValidateLength = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2 className="font-mono">minValidateLength</h2>
    <p>
      This option can be set to provide a default value for the{' '}
      <FieldMinValidateLengthLink/> option for all fields.
      Individual fields can set their own values to override it.
    </p>
  </div>

export default MinValidateLength