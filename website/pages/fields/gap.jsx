import React        from 'react'
import Example      from '../../site/Example.jsx'
import FieldsGap    from '../../examples/fields/FieldsGap.jsx'
import FieldsGapSrc from '../../examples/fields/FieldsGap.jsx?raw'
import FieldsPager  from '../../site/Pager/FieldsPager.jsx'
import { FieldsGridLink } from '../../site/Links.jsx'

const FieldsGapPage = () =>
  <div className="prose">
    <h1>Fields</h1>
    <h2 className="font-mono">gap</h2>
    <p>
      The <code>gap</code> property can be set to define the horizontal gap
      between the grid columns in multiples of 0.25rem.  This only has an
      effect when the <FieldsGridLink/> option is set.  The default value is
      4 (1rem).
    </p>
    <Example
      Component={FieldsGap}
      code={FieldsGapSrc}
      caption="Fields Gap"
      expand
    />
    <FieldsPager/>
  </div>

export default FieldsGapPage