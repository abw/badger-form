import React         from 'react'
import OnBlur        from './_examples/OnBlur.jsx'
import OnBlurSrc     from './_examples/OnBlur.jsx?raw'
import Example       from '@/site/Example.jsx'
import SeeAlso       from '@/site/SeeAlso.jsx'
import Split         from '@/site/Split.jsx'
import TryItOut      from '@/site/TryItOut.jsx'
import {
  FieldLink, FieldOnChangeLink, FieldOnFocusLink, FieldOnInvalidLink,
  FieldOnValidLink, FieldValidateOnBlurLink
} from '@/site/Links.jsx'

const OnBlurExamples = () =>
  <>
    <h2 className="font-mono">onBlur</h2>
    <Split>
      <p>
        You can add an <code>onBlur</code> handler to a <FieldLink/>{' '}
        which will be called when the field is blurred (i.e. unselected).
        The field context will be passed as an argument.
      </p>
      <TryItOut>
        Focus on one of the fields below and then select the other field.
        A message should be displayed each time a field loses focus.
      </TryItOut>
    </Split>
    <Example
      Component={OnBlur}
      code={OnBlurSrc}
      caption="onFocus"
      expand
    />

    <SeeAlso
      links={[
        FieldValidateOnBlurLink,
        FieldOnFocusLink,
        FieldOnChangeLink,
        FieldOnValidLink,
        FieldOnInvalidLink
      ]}
    />
  </>


export default OnBlurExamples