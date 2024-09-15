import React        from 'react'
import Required     from './_examples/Required.jsx'
import RequiredSrc  from './_examples/Required.jsx?raw'
import SeeAlso      from '@/site/SeeAlso.jsx'
import TryItOut     from '@/site/TryItOut.jsx'
import { Example, Split }    from '@abw/badger-website'
import { FieldRequiredLabelLink, FieldRequiredMessageLink, FieldShowRequiredLink, FieldValidateOnBlurLink, FieldValidateOnChangeLink } from '@/website/site/Links.jsx'

const RequiredExample = () =>
  <>
    <h2 className="font-mono">required</h2>
    <Split align="end">
      <p>
        You can add a <code>required</code> property to a field to mark it
        as being required.  This automatically adds a validator to the field
        to ensure that a value is provided when the form is submitted.
      </p>
      <TryItOut>
        Try submitting the form without entering anything in the
        field input.
      </TryItOut>
    </Split>
    <Example
      Component={Required}
      code={RequiredSrc}
      caption="required"
      expand
    />

    <SeeAlso
      links={[
        FieldShowRequiredLink,
        FieldRequiredLabelLink,
        FieldRequiredMessageLink,
        FieldValidateOnBlurLink,
        FieldValidateOnChangeLink
      ]}
    />
  </>

export default RequiredExample