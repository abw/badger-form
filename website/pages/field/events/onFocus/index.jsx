import React          from 'react'
import OnFocus        from './_examples/OnFocus.jsx'
import OnFocusSrc     from './_examples/OnFocus.jsx?raw'
import SeeAlso        from '@/site/SeeAlso.jsx'
import TryItOut       from '@/site/TryItOut.jsx'
import { Example, Split }    from '@abw/badger-website'
import {
  FieldLink, FieldOnBlurLink, FieldOnChangeLink,
  FieldOnInvalidLink, FieldOnValidLink
} from '@/site/Links.jsx'

const OnFocusExamples = () =>
  <>
    <h2 className="font-mono">onFocus</h2>
    <Split>
      <p>
        You can add an <code>onFocus</code> handler to a <FieldLink/>{' '}
        which will be called when the field is focussed (i.e. selected).
        The field context will be passed as an argument.
      </p>
      <TryItOut>
        Focus on each of the fields below.  A message should be displayed
        each time a field gains focus.
      </TryItOut>
    </Split>
    <Example
      Component={OnFocus}
      code={OnFocusSrc}
      caption="onFocus"
      expand
    />

    <SeeAlso
      links={[
        FieldOnBlurLink,
        FieldOnChangeLink,
        FieldOnValidLink,
        FieldOnInvalidLink
      ]}
    />
  </>


export default OnFocusExamples