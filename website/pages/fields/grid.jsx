import React             from 'react'
import Example           from '../../site/Example.jsx'
import FieldsGrid        from '../../examples/fields/FieldsGrid.jsx'
import FieldsGridSrc     from '../../examples/fields/FieldsGrid.jsx?raw'
import FieldsGridAuto    from '../../examples/fields/FieldsGridAuto.jsx'
import FieldsGridAutoSrc from '../../examples/fields/FieldsGridAuto.jsx?raw'
import FieldsPager       from '../../site/Pager/FieldsPager.jsx'

const FieldsGridPage = () =>
  <div className="prose">
    <h1>Fields</h1>
    <h2 className="font-mono">grid</h2>

    <p>
      The <code>grid</code> property can be set to display the fields in a
      grid.  The value of the property should be the number of grid columns.
    </p>
    <Example
      Component={FieldsGrid}
      code={FieldsGridSrc}
      caption="Fields Grid"
      expand
    />
    <p>
      If you set <code>grid</code> to <code>true</code> then it will set
      the number of grid columns to the number of fields.
    </p>
    <Example
      Component={FieldsGridAuto}
      code={FieldsGridAutoSrc}
      caption="Fields Grid"
      expand
    />

    <FieldsPager/>
  </div>

export default FieldsGridPage