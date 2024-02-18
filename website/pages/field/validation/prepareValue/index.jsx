import React              from 'react'
import PrepareValueSource from './_examples/PrepareValue.jsx?raw'
import PrepareValue       from './_examples/PrepareValue.jsx'
import Example            from '@/site/Example.jsx'
import SeeAlso            from '@/site/SeeAlso.jsx'
import Split              from '@/site/Split.jsx'
import TryItOut           from '@/site/TryItOut.jsx'
import { FieldLink, FieldValidateLink, FieldValidateOnBlurLink, FieldValidateOnChangeLink }      from '@/site/Links.jsx'

const PrepareValueExamples = () =>
  <div className="prose flow">
    <h1>Field Validation</h1>
    <h2 className="font-mono">prepareValue</h2>
    <Split>
      <p>
        You can add a <code className="code">prepareValue</code> function to
        a <FieldLink/> to prepare the value before it&apos;s set.
      </p>
      <TryItOut>
        Try entering some letters in the field below.  You should see that
        they get converted to upper case.
      </TryItOut>
    </Split>
    <Example
      Component={PrepareValue}
      code={PrepareValueSource}
      caption="onChange" expand
    />
    <SeeAlso
      links={[
        FieldValidateLink,
        FieldValidateOnBlurLink,
        FieldValidateOnChangeLink
      ]}
    />
  </div>


export default PrepareValueExamples