import React          from 'react'
import Example        from '@/site/Example.jsx'
import FunctionsSrc   from './_examples/Functions.jsx?raw'
import Functions      from './_examples/Functions.jsx'

const Children = () =>
  <>
    <h2 className="font-mono">children</h2>
    <p>
      You can define children of a form, either as components or functions.
      Components can access the form context via <code>useForm</code>.
      Functions receive the form context as the first argument.
    </p>
    <Example
      Component={Functions}
      code={FunctionsSrc}
      caption="children" expand
    />
  </>


export default Children