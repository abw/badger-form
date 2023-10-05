import React      from 'react'
import Example    from '../../site/Example.jsx'
import DebugCode  from '../../examples/form/Debug.jsx'
import DebugSrc   from '../../examples/form/Debug.jsx?raw'
import FormPager  from '../../site/Pager/FormPager.jsx'

const FormDebug = () =>
  <div className="prose">
    <h1>Form</h1>
    <h2 className="font-mono">Debug</h2>
    <p>
      The <code>Debug</code> component can be used to debug a form.
    </p>
    <Example
      Component={DebugCode}
      code={DebugSrc}
      caption="Debug Component"
      expand
    />

    <FormPager/>
  </div>

export default FormDebug
