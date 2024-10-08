import React          from 'react'
import Validate       from './_examples/Validate.jsx'
import ValidateSrc    from './_examples/Validate.jsx?raw'
import SeeAlso        from '@/site/SeeAlso.jsx'
import TryItOut       from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'
import { FieldLink, FieldRequiredLink, FieldValidateLink, FieldValidateOnChangeLink, FormLink } from '@/site/Links.jsx'

const ValidateExamples = () =>
  <>
    <h2 className="font-mono">validateOnBlur</h2>
    <Split>
      <p>
        The <code>validateOnBlur</code> property can be set to trigger
        validation whenever a field is blurred.  You can set it on individual{' '}
        <FieldLink/> components or on the parent <FormLink/> to have it apply
        to all fields.
      </p>
      <TryItOut>
        Try switching focus from one field to another without entering
        anything.  You should see the custom validation errors when each
        field is blurred.
      </TryItOut>
    </Split>
    <Example
      Component={Validate}
      code={ValidateSrc}
      caption="validate"
    />

    <SeeAlso
      links={[
        FieldRequiredLink,
        FieldValidateLink,
        FieldValidateOnChangeLink
      ]}
    />
  </>

export default ValidateExamples