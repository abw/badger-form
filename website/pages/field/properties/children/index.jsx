import React          from 'react'
import FunctionsSrc   from './_examples/Functions.jsx?raw'
import Functions      from './_examples/Functions.jsx'
import Example        from '@/site/Example.jsx'
import { FieldLayoutLink } from '@/site/Links.jsx'
// import SeeAlso      from '../../../../site/SeeAlso.jsx'

const Children = () =>
  <div className="prose flow">
    <h1>Field Properties</h1>

    <h2 className="font-mono">children</h2>
    <p>
      You can define children of a field, either as components or functions.
      Components can access the field context via <code>useField</code>.
      Functions receive the field context as the first argument.
    </p>
    <p>
      Note that if you define children for the field then it will
      replace the default <FieldLayoutLink/> component.  In this case it&apos;s
      up to you to render the field content.
    </p>
    <p>
      If you want to include the default layout for a field and add
      some content of your own then you can include the <FieldLayoutLink/> component
      manually.
    </p>
    <Example
      Component={Functions}
      code={FunctionsSrc}
      caption="children"
      expand
    />
  </div>


export default Children