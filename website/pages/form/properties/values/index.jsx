import React      from 'react'
import Values     from './_examples/Values.jsx'
import ValuesSrc  from './_examples/Values.jsx?raw'
import Example    from '@/site/Example.jsx'
import SeeAlso    from '@/site/SeeAlso.jsx'
import { FormHiddenLink } from '@/website/site/Links.jsx'

const ValuesExamples = () =>
  <div className="prose">
    <h1>Form Properties</h1>
    <h2><code>values</code></h2>
    <p>
      The <code>values</code> property can be used to pre-define values
      for fields in the form.  This is typically used when editing existing
      data records.
    </p>
    <Example
      Component={Values}
      code={ValuesSrc}
      caption="fields" expand
    />
    <SeeAlso
      links={[
        FormHiddenLink
      ]}
    />
  </div>


export default ValuesExamples