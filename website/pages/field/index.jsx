import React            from 'react'
import Example          from '@/site/Example.jsx'
import ExampleSrc       from './_examples/Example.jsx?raw'
import ExampleElement   from './_examples/Example.jsx'
import { FormLink } from '@/site/Links.jsx'
// import TOC from '../../../site/TOC.jsx'

const Home = () =>
  <>
    <h1>Field Component</h1>
    <p className="intro">
      The <code>Field</code> component is used to render a field inside
      a <FormLink/>.
    </p>
    <Example
      Component={ExampleElement}
      code={ExampleSrc}
      caption="Field" expand
    />
    {/* <TOC menu={FieldMenu}/> */}
  </>

export default Home