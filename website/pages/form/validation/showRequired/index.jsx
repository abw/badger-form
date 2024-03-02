import React from 'react'
import { FieldShowRequiredLink } from '@/site/Links.jsx'

const ShowRequired = () =>
  <>
    <h2 className="font-mono">showRequired</h2>
    <p>
      This option can be set <code>true</code> to enable the{' '}
      <FieldShowRequiredLink/> option as the default for all fields.
      Individual fields can set it <code>false</code> to override the
      default.
    </p>
    <p>
      When enabled, required fields will display a &quot;Required&quot; tag
      in the label.
    </p>
  </>

export default ShowRequired