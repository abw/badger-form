import React       from 'react'
import Example     from '../../site/Example.jsx'
import Fields      from '../../examples/fields/Fields.jsx'
import FieldsSrc   from '../../examples/fields/Fields.jsx?raw'
import FieldsPager from '../../site/Pager/FieldsPager.jsx'
import { FieldLink } from '../../site/Links.jsx'

const FieldsPage = () =>
  <div className="prose">
    <h1>Fields</h1>
    <p>
      The <code>Fields</code> component can be used as a short-cut to render
      multiple <FieldLink/> components.
    </p>

    <Example
      Component={Fields}
      code={FieldsSrc}
      caption="Fields"
      expand
    />
    <FieldsPager/>
  </div>

export default FieldsPage