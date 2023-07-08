import React from 'react'
import Example       from '../../site/Example.jsx'
import WatchFieldCode from '../../examples/field/WatchField.jsx'
import WatchFieldSrc  from '../../examples/field/WatchField.jsx?raw'
import WatchPrepareCode from '../../examples/field/WatchPrepare.jsx'
import WatchPrepareSrc  from '../../examples/field/WatchPrepare.jsx?raw'
import Pager from '../../site/Pager/index.jsx'
import { Field } from '../../site/Menus.jsx'

const WatchField = () =>
  <div className="prose">
    <h1>watchField</h1>
    <p>
      The <code>watchField</code> property can be used to watch the value
      of another field and copy it.
    </p>
    <Example
      Component={WatchFieldCode}
      code={WatchFieldSrc}
      caption="watchField"
      expand
    />

    <p>
      It can be used in conjunction with <code>prepareField</code> to create
      a modified copy of another field.
    </p>
    <Example
      Component={WatchPrepareCode}
      code={WatchPrepareSrc}
      caption="watchField and prepareField"
      expand
    />

    <Pager menu={Field}/>
  </div>

export default WatchField