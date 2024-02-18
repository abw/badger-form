import React          from 'react'
import SetInvalidSrc  from './_examples/SetInvalid.jsx?raw'
import SetInvalid     from './_examples/SetInvalid.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import TryItOut       from '@/site/TryItOut.jsx'
import { FieldOnInvalidLink, FieldOnLoadLink, FieldSetValidLink } from '@/site/Links.jsx'

const SetInvalidExamples = () =>
  <div className="prose flow">
    <h1>Field Functions</h1>

    <h2 className="font-mono">setInvalid()</h2>
    <Split>
      <div>
        <p>
          The <code>setInvalid()</code> function can be called to mark a field
          as invalid.
        </p>
        <p>
          You can use the <FieldOnLoadLink/> property to save a reference to
          a field context object.
          Then call the <code>setInvalid()</code> method on the field object to
          make it invalid.  An optional argument can be provided as the message
          to display.
        </p>
      </div>
      <TryItOut>
        Click on one of the buttons to set the corresponding field to be invalid.
      </TryItOut>
    </Split>
    <Example
      Component={SetInvalid}
      code={SetInvalidSrc}
      caption="setFocus()"
    />

    <SeeAlso
      links={[
        FieldSetValidLink,
        FieldOnInvalidLink
      ]}
    />
  </div>


export default SetInvalidExamples