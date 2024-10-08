import React              from 'react'
import RequiredMessageSrc from './_examples/RequiredMessage.jsx?raw'
import RequiredMessage    from './_examples/RequiredMessage.jsx'
import SeeAlso            from '@/site/SeeAlso.jsx'
import TryItOut           from '@/site/TryItOut.jsx'
import { Example, Split }    from '@abw/badger-website'
import {
  FieldLink, FieldRequiredLabelLink, FieldRequiredLink,
  FieldShowRequiredLink, FieldValidateOnBlurLink, FieldValidateOnChangeLink,
  FormLink
} from '@/site/Links.jsx'

const RequiredMessageExample = () =>
  <>
    <h2 className="font-mono">requiredMessage</h2>
    <Split align="end">
      <div>
        <p>
          You can use the <code className="code">requiredMessage</code> property
          to change the error message that is generated for <FieldRequiredLink/> fields
          that aren&apos;t completed.
        </p>
        <p>
          You can set it on individual <FieldLink/> components or on the parent{' '}
          <FormLink/> to act as the default for all fields.
        </p>
      </div>
      <TryItOut>
        Try submitting the form without entering any values.  You should
        see the form-wide <code>requiredMessage</code> displayed for the
        first field, and the field-specific value for the second.
      </TryItOut>
    </Split>
    <Example
      Component={RequiredMessage} code={RequiredMessageSrc}
      caption="requiredMessage" expand
    >
    </Example>

    <SeeAlso
      links={[
        FieldRequiredLink,
        FieldShowRequiredLink,
        FieldRequiredLabelLink,
        FieldValidateOnChangeLink,
        FieldValidateOnBlurLink
      ]}
    />
  </>

export default RequiredMessageExample