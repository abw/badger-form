import React    from 'react'
import ResetSrc from './_examples/Reset.jsx?raw'
import Reset    from './_examples/Reset.jsx'
import Example  from '@/site/Example.jsx'
import SeeAlso  from '@/site/SeeAlso.jsx'
import Split    from '@/site/Split.jsx'
import TryItOut from '@/site/TryItOut.jsx'
import {
  FieldOnBlurLink, FieldOnFocusLink, FieldOnLoadLink, FormSetFocusLink
} from '@/site/Links.jsx'

const ResetExamples = () =>
  <>
    <h2 className="font-mono">reset()</h2>
    <Split>
      <div>
        <p>
          The <code>reset()</code> function can be called to reset a field
          to its initial state.
        </p>
        <p>
          You can use the <FieldOnLoadLink/> property to save a reference to a field
          context object.
          Then call the <code>reset()</code> method on the field object to
          make it invalid.  An optional argument can be provided as the message
          to display.
        </p>
      </div>
      <TryItOut>
        Enter some text in either of the inputs below and then click on the
        corresponding button to reset it to the original value.
      </TryItOut>
    </Split>

    <Example
      Component={Reset}
      code={ResetSrc}
      caption="reset()"
    />

    <SeeAlso
      links={[
        FormSetFocusLink,
        FieldOnFocusLink,
        FieldOnBlurLink
      ]}
    />
  </>


export default ResetExamples