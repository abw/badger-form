import React          from 'react'
import SetValidSrc    from './_examples/SetValid.jsx?raw'
import SetValid       from './_examples/SetValid.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import TryItOut       from '@/site/TryItOut.jsx'
import { FieldOnLoadLink, FieldOnValidLink, FieldSetInvalidLink } from '@/site/Links.jsx'

const SetValidExamples = () =>
  <>
    <h2 className="font-mono">setValid()</h2>
    <Split>
      <div>
        <p>
          The <code>setValid()</code> function can be called to mark a field
          as valid.
        </p>
        <p>
          You can use the <FieldOnLoadLink/> property to save a reference to
          a field context object.
          Then call the <code>setValid()</code> method on the field object to
          make it valid.  An optional argument can be provided as the message
          to display.
        </p>
      </div>
      <TryItOut>
        Click on one of the buttons to set the corresponding field to be valid.
      </TryItOut>
    </Split>
    <Example
      Component={SetValid}
      code={SetValidSrc}
      caption="setFocus()"
    />

    <SeeAlso
      links={[
        FieldSetInvalidLink,
        FieldOnValidLink
      ]}
    />
  </>


export default SetValidExamples