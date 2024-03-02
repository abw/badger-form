import React          from 'react'
import Example        from '@/site/Example.jsx'
import ExampleSrc     from './_examples/Example.jsx?raw'
import ExampleElement from './_examples/Example.jsx'
import FormPager      from '@/site/Pager/FormPager.jsx'
import { FieldLink, SubmitLink } from '@/site/Links.jsx'

const Home = () =>
  <div className="prose flow">
    <h1>Form</h1>
    <p className="intro wide">
      The <code>Form</code> component is used to render a form.
      Inside the form you will typically have one or more{' '}
      <FieldLink/> components to render
      the fields and a <SubmitLink/> component to add a submit button.
    </p>
    <Example
      Component={ExampleElement}
      code={ExampleSrc}
      caption="Form"
      expand
    />
    {/* <TOC menu={FormMenu}/> */}
    <FormPager/>
  </div>

export default Home