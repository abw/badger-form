import React from 'react'
import Example       from '../../site/Example.jsx'
import WideCode from '../../examples/tutorial/Wide.jsx'
import WideSrc  from '../../examples/tutorial/Wide.jsx?raw'
import Pager from '../../site/Pager/index.jsx'
import { Tutorial } from '../../site/Menus.jsx'

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

    <Pager menu={Tutorial}/>
  </div>

export default WideFields
