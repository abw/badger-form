import React from 'react'
import { FieldOptionalLabelLink } from '@/website/site/Links.jsx'

const OptionalLabel = () =>
  <>
    <h2 className="font-mono">optionalLabel</h2>
    <p>
      This option can be set to provide a default value for the{' '}
      <FieldOptionalLabelLink/> option for all fields.
      Individual fields can set their own values to override it.
    </p>
  </>

export default OptionalLabel