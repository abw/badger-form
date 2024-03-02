import React          from 'react'
import Input          from './_examples/Input.jsx'
import InputSrc       from './_examples/Input.jsx?raw'
import Example        from '@/site/Example.jsx'
import RadioPager     from '@/site/Pager/RadioPager.jsx'
import { FieldLink, FieldTypeLink } from '@/site/Links.jsx'

const RadioExamples = () =>
  <div className="prose flow">
    <h1>Input Types</h1>
    <h2 className="font-mono">radio</h2>
    <p>
      Set the <FieldLink/> <FieldTypeLink/> to <code>radio</code> for a
      radio button set.
    </p>
    <Example
      Component={Input}
      code={InputSrc}
      caption="checkbox"
      expand
    />
    <RadioPager/>
  </div>

export default RadioExamples
