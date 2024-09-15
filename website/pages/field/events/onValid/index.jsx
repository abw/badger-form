import React      from 'react'
import OnValid    from './_examples/OnValid.jsx'
import OnValidSrc from './_examples/OnValid.jsx?raw'
import SeeAlso    from '@/site/SeeAlso.jsx'
import TryItOut   from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'
import { FieldLink, FieldOnBlurLink, FieldOnChangeLink, FieldOnFocusLink, FieldOnInvalidLink, FieldValidateLink, FormLink } from '@/site/Links.jsx'

const OnValidExamples = () =>
  <>
    <h2 className="font-mono">onValid</h2>
    <Split>
      <p>
        You can add an <code>onValid</code> handler to a <FieldLink/>{' '}
        which will be called when the field is successfully validated.
        The field context will be passed as an argument.
      </p>
      <TryItOut>
        Enter some text in one of the fields below and then select the other
        field.  The <code>validateOnBlur</code> option on the <FormLink/>{' '}
        means that the first field will be validated when it loses focus and
        the <code>onValid</code> handler will be called.
      </TryItOut>
    </Split>
    <Example
      Component={OnValid}
      code={OnValidSrc}
      caption="onValid"
      expand
    />

    <SeeAlso
      links={[
        FieldValidateLink,
        FieldOnFocusLink,
        FieldOnBlurLink,
        FieldOnChangeLink,
        FieldOnInvalidLink
      ]}
    />
  </>


export default OnValidExamples