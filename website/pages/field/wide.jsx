import React      from 'react'
import Example    from '../../site/Example.jsx'
import WideCode   from '../../examples/field/Wide.jsx'
import WideSrc    from '../../examples/field/Wide.jsx?raw'
import FieldPager from '../../site/Pager/FieldPager.jsx'

const WideFields = () =>
  <div className="prose">
    <h1>WideFields</h1>
    <p>
      The <code>wide</code> property can be added to a <code>Field</code> to
      have it expand to the full width of the container.
    </p>
    <Example
      Component={WideCode}
      code={WideSrc}
      caption="Wide Fields"
      expand
    />

    <FieldPager/>
  </div>

export default WideFields
