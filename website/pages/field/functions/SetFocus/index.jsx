import React        from 'react'
import SetFocusSrc  from './_examples/SetFocus.jsx?raw'
import SetFocus     from './_examples/SetFocus.jsx'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'
import Split        from '@/site/Split.jsx'
import TryItOut     from '@/site/TryItOut.jsx'
import { FormLink, FormSetFocusLink, FieldOnLoadLink, FieldOnFocusLink, FieldOnBlurLink } from '@/site/Links.jsx'

const SetFocusExamples = () =>
  <div className="prose flow">
    <h1>Field Functions</h1>

    <h2 className="font-mono">setFocus()</h2>
    <Split>
      <div>
        <p>
          The <code>setFocus()</code> function can be called to focus a field.
          You can use the <FieldOnLoadLink/> property to save a reference to
          a field context object.
        </p>
        <p>
          Then call the <code>setFocus()</code> method on the field object to
          focus it.
        </p>
      </div>
      <TryItOut>
        Click on one of the buttons to focus the corresponding field.
      </TryItOut>
    </Split>
    <Example
      Component={SetFocus}
      code={SetFocusSrc}
      caption="setFocus()"
    />

    <p>
      You can also focus on fields by name using the <FormLink/>{' '}
      <FormSetFocusLink/> method.
    </p>
    <SeeAlso
      links={[
        FormSetFocusLink,
        FieldOnFocusLink,
        FieldOnBlurLink
      ]}
    />
  </div>

export default SetFocusExamples