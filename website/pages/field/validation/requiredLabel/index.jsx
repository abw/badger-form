import React            from 'react'
import RequiredLabelSrc from './_examples/RequiredLabel.jsx?raw'
import RequiredLabel    from './_examples/RequiredLabel.jsx'
import SeeAlso          from '@/site/SeeAlso.jsx'
import { Example }    from '@abw/badger-website'
import {
  FieldLink, FieldOptionalLabelLink, FieldRequiredLink, FieldShowOptionalLink,
  FieldShowRequiredLink, FormLink
} from '@/site/Links.jsx'

const RequiredLabelExample = () =>
  <>
    <h2 className="font-mono">requiredLabel</h2>
    <p>
      You can use the <code className="code">requiredLabel</code> property
      to change the label that is displayed for <FieldRequiredLink/> fields
      that have the <FieldShowRequiredLink/> option enabled.  You can set it
      on individual <FieldLink/> components or on the parent <FormLink/>.
    </p>
    <Example
      Component={RequiredLabel}
      code={RequiredLabelSrc}
      caption="requiredLabel"
      expand
    />

    <SeeAlso
      links={[
        FieldRequiredLink,
        FieldShowRequiredLink,
        FieldShowOptionalLink,
        FieldOptionalLabelLink
      ]}
    />
  </>

export default RequiredLabelExample