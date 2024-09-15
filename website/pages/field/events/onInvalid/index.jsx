import React        from 'react'
import OnInvalid    from './_examples/OnInvalid.jsx'
import OnInvalidSrc from './_examples/OnInvalid.jsx?raw'
import SeeAlso      from '@/site/SeeAlso.jsx'
import TryItOut     from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'
import {
  FieldLink, FormLink, FieldRequiredLink, FieldRequiredMessageLink,
  FieldValidateOnBlurLink, FieldValidateLink, FieldOnBlurLink,
  FieldOnFocusLink, FieldOnChangeLink, FieldOnValidLink
} from '@/site/Links.jsx'

const OnInvalidExamples = () =>
  <>
    <h2 className="font-mono">onInvalid</h2>

    <Split>
      <p>
        You can add an <code>onInvalid</code> handler to a <FieldLink/>{' '}
        which will be called when the field fails validation.
        The field context will be passed as an argument.
      </p>
      <TryItOut>
        <p>
          Click one of the fields below and then select the other field without
          entering any text. The <FieldValidateOnBlurLink/> option on the{' '}
          <FormLink/>{' '} means that the fields will be validated when they
          lose focus. They&apos;re both marked as <FieldRequiredLink/> so they
          will fail validation (assuming you haven&apos;t entered anything) and
          the <code>onInvalid</code> handler will be called.
        </p>
        <p>
          Also note the use of <FieldRequiredMessageLink/> to set a custom
          message for the second field.
        </p>
      </TryItOut>
    </Split>
    <Example
      Component={OnInvalid} code={OnInvalidSrc}
      caption="onInvalid" expand
    />

    <SeeAlso
      links={[
        FieldValidateLink,
        FieldOnBlurLink,
        FieldOnFocusLink,
        FieldOnChangeLink,
        FieldOnFocusLink,
        FieldOnChangeLink,
        FieldOnValidLink
      ]}
    />
  </>

export default OnInvalidExamples