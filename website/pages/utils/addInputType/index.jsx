import React          from 'react'
import UseInput       from './_examples/UseInput.jsx'
import UseInputSrc    from './_examples/UseInput.jsx?raw'
import AddInput       from './_examples/AddInput.jsx'
import AddInputSrc    from './_examples/AddInput.jsx?raw'
import ColorButtonSrc from './_examples/ColorButtonInput.jsx?raw'
import Example        from '@/site/Example.jsx'
import CodeBlock      from '@/site/CodeBlock.jsx'
import { FieldInputLink, FieldTypeLink } from '@/website/site/Links.jsx'

const AddInputExamples = () =>
  <>
    <h2 className="font-mono">addInputType()</h2>
    <p className="wide">
      The <code>addInputType()</code> function can be used to add your own
      custom <FieldInputLink/> components.
    </p>
    <p className="wide">
      Here&apos;s a trivial example where we implement a{' '}
      <code>ColorButtonInput</code> input, allowing
      a user to click on a button to select a color.
    </p>
    <CodeBlock
      code={ColorButtonSrc}
      caption="ColorButtonInput.jsx"
    />
    <h2>Using <span className="font-mono">Input</span></h2>
    <p className="wide">
      You can use the <FieldInputLink/> property on a field to directly
      reference the custom input component.
    </p>
    <Example
      Component={UseInput}
      code={UseInputSrc}
      caption="Input"
      // undent={2}
      // expand
    />
    <h2>Using <span className="font-mono">addInput()</span></h2>
    <p className="wide">
      The other approach is to use <code>addInputType()</code> to register
      your component.  You can then use the <FieldTypeLink/> property to
      access it using the name you give it.  In this example we give it
      the name <code>colorButton</code>.
    </p>
    <Example
      Component={AddInput}
      code={AddInputSrc}
      caption="addInput()"
      // undent={2}
      // expand
    />
  </>

export default AddInputExamples
