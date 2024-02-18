import React      from 'react'
import Hidden     from './_examples/Hidden.jsx'
import HiddenSrc  from './_examples/Hidden.jsx?raw'
import Example    from '@/site/Example.jsx'
import Split      from '@/site/Split.jsx'
import TryItOut   from '@/site/TryItOut.jsx'
// import SeeAlso    from '@/site/SeeAlso.jsx'
// import { FormHiddenLink } from '@/site/Links.jsx'

const HiddenExamples = () =>
  <div className="prose flow">
    <h1>Form Properties</h1>
    <h2 className="font-mono">hidden</h2>
    <Split align="end">
      <div>
        <p>
          The <code>hidden</code> property can be used to define hidden values
          for the form.  This is typically used to include identifiers when editing
          existing data records.
        </p>
        <p>
          Any <code>hidden</code> fields and their values will be included in the
          submitted data.
        </p>
      </div>
      <TryItOut>
        Submit the form below.  You should see an alert showing that the
        two visible fields and the hidden data were all submitted.
      </TryItOut>
    </Split>
    <Example
      Component={Hidden}
      code={HiddenSrc}
      caption="hidden" expand
    />
    {/*
    <SeeAlso
      links={[
        FormHiddenLink
      ]}
    />
    */}
  </div>


export default HiddenExamples