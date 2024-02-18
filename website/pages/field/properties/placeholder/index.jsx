import React          from 'react'
import PlaceholderSrc from './_examples/Placeholder.jsx?raw'
import Placeholder    from './_examples/Placeholder.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import { FieldNameLink, FormFieldsLink } from '@/site/Links.jsx'

const PlaceholderExamples = () =>
  <div className="prose flow">
    <h1>Field Properties</h1>

    <h2 className="font-mono">placeholder</h2>
    <p>
      Use the <code>placeholder</code> property to add some text as a
      placeholder in the input.
    </p>
    <Example
      Component={Placeholder}
      code={PlaceholderSrc}
      caption="placeholder" expand
    />
    <SeeAlso
      links={[
        FieldNameLink,
        FormFieldsLink
      ]}
    />
  </div>


export default PlaceholderExamples