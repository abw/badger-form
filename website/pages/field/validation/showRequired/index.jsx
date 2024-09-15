import React                from 'react'
import ShowRequired         from './_examples/ShowRequired.jsx'
import ShowRequiredSrc      from './_examples/ShowRequired.jsx?raw'
import ShowRequiredForm     from './_examples/ShowRequiredForm.jsx'
import ShowRequiredFormSrc  from './_examples/ShowRequiredForm.jsx?raw'
import SeeAlso              from '@/site/SeeAlso.jsx'
import { Example }          from '@abw/badger-website'
import { FieldLink, FieldOptionalLabelLink, FieldRequiredLabelLink, FieldRequiredLink, FieldShowOptionalLink, FormLink } from '@/site/Links.jsx'

const ShowRequiredExample = () =>
  <>
    <h2 className="font-mono">showRequired</h2>
    <p>
      If a <FieldLink/> is marked as <FieldRequiredLink/> then the{' '}
      <code>showRequired</code> property can be added to have an additional
      label displayed indicating that it is required.
    </p>
    <Example
      Component={ShowRequired}
      code={ShowRequiredSrc}
      caption="showRequired on Field"
      expand
    />

    <p>
      The <code>showRequired</code> property can also be added to the{' '}
      <FormLink/> to have it apply to all <FieldRequiredLink/> fields.
    </p>
    <Example
      Component={ShowRequiredForm}
      code={ShowRequiredFormSrc}
      caption="showRequired on Form"
      expand
    />

    <SeeAlso
      links={[
        FieldRequiredLink,
        FieldRequiredLabelLink,
        FieldShowOptionalLink,
        FieldOptionalLabelLink
      ]}
    />
  </>

export default ShowRequiredExample