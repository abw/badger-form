import React from 'react'
import { FieldShowOptionalLink } from '@/site/Links.jsx'

const ShowOptional = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2 className="font-mono">showOptional</h2>
    <p>
      This option can be set <code>true</code> to enable the{' '}
      <FieldShowOptionalLink/> option as the default for all fields.
      Individual fields can set it <code>false</code> to override the
      default.
    </p>
    <p>
      When enabled, optional fields will be display an &quot;Optional&quot; tag
      in the label.
    </p>
  </div>

export default ShowOptional