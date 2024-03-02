import React          from 'react'
import OnChangeSource from './_examples/OnChange.jsx?raw'
import OnChange       from './_examples/OnChange.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import TryItOut       from '@/site/TryItOut.jsx'
import {
  FieldLink, FieldOnBlurLink, FieldOnFocusLink, FieldOnInvalidLink,
  FieldOnValidLink, FieldValidateOnChangeLink
} from '@/site/Links.jsx'

const OnChangeExamples = () =>
  <>
    <h2 className="font-mono">onChange</h2>
    <Split>
      <p>
        You can add an <code>onChange</code> handler to a <FieldLink/>{' '}
        which will be called when the field value is changed.  The field context
        will be passed as an argument.
      </p>
      <TryItOut>
        Try entering some text in the field below.  You should see the
        &quot;Current value&quot; display update to reflect the field
        content.
      </TryItOut>
    </Split>
    <Example
      Component={OnChange}
      code={OnChangeSource}
      caption="onChange"
      expand
    />

    <SeeAlso
      links={[
        FieldValidateOnChangeLink,
        FieldOnBlurLink,
        FieldOnFocusLink,
        FieldOnValidLink,
        FieldOnInvalidLink
      ]}
    />
  </>


export default OnChangeExamples