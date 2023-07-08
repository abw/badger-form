import React from 'react'
import Example       from '../../site/Example.jsx'
import PrepareValueCode from '../../examples/field/PrepareValue.jsx'
import PrepareValueSrc  from '../../examples/field/PrepareValue.jsx?raw'
import Pager from '../../site/Pager/index.jsx'
import { Field } from '../../site/Menus.jsx'

const PrepareValue = () =>
  <div>
    <h1>prepareValue</h1>
    <p>
      The <code>prepareValue</code> property can be used to transform an
      input value.  In this example we convert the inputs to upper case.
    </p>
    <Example
      Component={PrepareValueCode}
      code={PrepareValueSrc}
      caption="prepareValue"
      expand
    />

    <Pager menu={Field}/>
  </div>

export default PrepareValue