import React from 'react'
import { FieldRequiredMessageLink } from '@/website/site/Links.jsx'

const RequiredMessage = () =>
  <>
    <h2 className="font-mono">requiredMessage</h2>
    <p>
      This option can be set to provide a default value for the{' '}
      <FieldRequiredMessageLink/> option for all fields.
      Individual fields can set their own values to override it.
    </p>
  </>

export default RequiredMessage