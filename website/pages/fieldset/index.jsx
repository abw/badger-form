import React        from 'react'
import Fieldset     from './_examples/Fieldset.jsx'
import FieldsetSrc  from './_examples/Fieldset.jsx?raw'
import Example      from '@/site/Example.jsx'
import { FieldLink } from '@/website/site/Links.jsx'

const FieldsetExamples = () =>
  <div className="prose flow">
    <h1>Fieldset</h1>
    <p className="intro wide">
      The <code>Fieldset</code> component can be used to create a field
      set containing one or more <FieldLink/> components.
    </p>
    <Example
      Component={Fieldset}
      code={FieldsetSrc}
      caption="Fieldset"
      expand
    />
  </div>

export default FieldsetExamples