import React              from 'react'
import PrepareValueSource from './_examples/PrepareValue.jsx?raw'
import PrepareValue       from './_examples/PrepareValue.jsx'
import SeeAlso            from '@/site/SeeAlso.jsx'
import TryItOut           from '@/site/TryItOut.jsx'
import { Example, Split }    from '@abw/badger-website'
import { FieldLink, FieldValidateLink, FieldValidateOnBlurLink, FieldValidateOnChangeLink }      from '@/site/Links.jsx'

const PrepareValueExamples = () =>
  <>
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
  </>


export default PrepareValueExamples