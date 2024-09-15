import React             from 'react'
import OptionalLabelSrc  from './_examples/OptionalLabel.jsx?raw'
import OptionalLabel     from './_examples/OptionalLabel.jsx'
import SeeAlso           from '@/site/SeeAlso.jsx'
import { Example }    from '@abw/badger-website'
import {
  FieldLink, FieldRequiredLabelLink, FieldRequiredLink, FieldShowOptionalLink,
  FieldShowRequiredLink, FormLink
} from '@/site/Links.jsx'

const OptionalLabelExample = () =>
  <>
    <h2 className="font-mono">optionalLabel</h2>
    <p>
      You can use the <code className="code">optionalLabel</code> property
      to change the label that is display for optional fields (i.e. those that
      aren&apos;t marked as <FieldRequiredLink/>) that have the{' '}
      <FieldShowOptionalLink/> option set.  You can set it on individual{' '}
      <FieldLink/> components or on the parent <FormLink/> to act as a default
      for all fields.
    </p>
    <Example
      Component={OptionalLabel}
      code={OptionalLabelSrc}
      caption="optionalLabel" expand
    />
    <SeeAlso
      links={[
        FieldRequiredLink,
        FieldShowRequiredLink,
        FieldShowOptionalLink,
        FieldRequiredLabelLink
      ]}
    />
  </>

export default OptionalLabelExample