import React          from 'react'
import Example        from '../../site/Example.jsx'
import FieldLabelCode from '../../examples/field/FieldLabel.jsx'
import FieldLabelSrc  from '../../examples/field/FieldLabel.jsx?raw'
import FieldPager     from '../../site/Pager/FieldPager.jsx'

const FieldLabel = () =>
  <div className="prose">
    <h1>Field</h1>
    <h2 className="font-mono">label</h2>
    <p>
      Used to add a label to the field.
    </p>
    <Example
      Component={FieldLabelCode}
      code={FieldLabelSrc}
      caption="Field Label"
      expand
    />

    <FieldPager/>
  </div>

export default FieldLabel