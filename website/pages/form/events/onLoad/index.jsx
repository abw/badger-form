import React      from 'react'
import OnLoad     from './_examples/OnLoad.jsx'
import OnLoadSrc  from './_examples/OnLoad.jsx?raw'
import Example    from '@/site/Example.jsx'

const OnLoadExamples = () =>
  <>
    <h2 className="font-mono">onLoad</h2>
    <p>
      The <code>onLoad</code> property can be used to define a function
      that will be called when the form is loaded.  This allows you to
      capture a reference to the form context object for manipulating
      the form programmatically.
    </p>
    <Example
      Component={OnLoad}
      code={OnLoadSrc}
      caption="onLoad"
    />
  </>


export default OnLoadExamples