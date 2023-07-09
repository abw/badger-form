import React          from 'react'
import Example        from '../../site/Example.jsx'
import FieldHelpCode  from '../../examples/field/Help.jsx'
import FieldHelpSrc   from '../../examples/field/Help.jsx?raw'
import FieldPager     from '../../site/Pager/FieldPager.jsx'

const FieldHelp = () =>
  <div className="prose">
    <h1>Field</h1>
    <h2 className="font-mono">help</h2>
    <p>
      The <code>help</code> property can be used to provide an additional help
      message for a field.  This will be displayed under the input.  If a
      validation message is defined then it will be displayed instead.
    </p>
    <Example
      Component={FieldHelpCode}
      code={FieldHelpSrc}
      caption="Field Help"
      expand
    />

    <FieldPager/>
  </div>

export default FieldHelp