import React from 'react'
import { FieldRequiredLabelLink } from '@/website/site/Links.jsx'

const RequiredLabel = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2 className="font-mono">requiredLabel</h2>
    <p>
      This option can be set to provide a default value for the{' '}
      <FieldRequiredLabelLink/> option for all fields.
      Individual fields can set their own values to override it.
    </p>
  </div>

export default RequiredLabel