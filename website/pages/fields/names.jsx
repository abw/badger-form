import React          from 'react'
import Example        from '../../site/Example.jsx'
import Fields         from '../../examples/fields/Fields.jsx'
import FieldsSrc      from '../../examples/fields/Fields.jsx?raw'
import FieldsArray    from '../../examples/fields/FieldsArray.jsx'
import FieldsArraySrc from '../../examples/fields/FieldsArray.jsx?raw'
import FieldsPager    from '../../site/Pager/FieldsPager.jsx'
import { FormFieldsLink, FormLink } from '../../site/Links.jsx'

const FieldsPage = () =>
  <div className="prose">
    <h1>Fields</h1>
    <h2 className="font-mono">names</h2>
    <p>
      The <code>names</code> property should be a whitespace delimited
      string of field names.  The names should correspond to fields defined
      using the <FormFieldsLink/> property on the <FormLink/>.
    </p>
    <p>
      Any other properties (except <code>grid</code>, <code>gap</code> and{' '}
      <code>className</code>, described below) will be added to each of the
      fields.  In this example the <code>wide</code> property is added to
      each field to make it extend to the full width of the form (20 rem
      as set by the <code>width-20rem</code> CSS class on the form).
    </p>
    <Example
      Component={Fields}
      code={FieldsSrc}
      caption="Fields"
      expand
    />
    <p>
      The <code>names</code> property can also be specified as an array
      of strings if you prefer.
    </p>
    <Example
      Component={FieldsArray}
      code={FieldsArraySrc}
      caption="Fields Array"
      expand
    />
    <FieldsPager/>
  </div>

export default FieldsPage