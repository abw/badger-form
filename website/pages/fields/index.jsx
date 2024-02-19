import React      from 'react'
import Fields     from './examples/Fields.jsx'
import FieldsSrc  from './examples/Fields.jsx?raw'
import Example    from '@/site/Example.jsx'
import { FieldsNamesLink } from '@/site/Links.jsx'

const FieldsExamples = () =>
  <div className="prose flow">
    <h1>Fields</h1>
    <p className="intro">
      The <code>Fields</code> component can be used to render multiple
      fields.
    </p>
    <p>
      This is a shortcut for convenience, but it depends on you having all
      your form fields defined in a separate schema so you can reference them
      only by name.
    </p>
    <p>
      The <FieldsNamesLink/> property should be used to
      specify the list of field names.  It renders each of the fields,
      collected together in a single{' '}
      <code className="code">div</code> element
    </p>
    <Example
      Component={Fields}
      code={FieldsSrc}
      caption="Fields"
    />
    {/*



    {/*
    <h2>Additional Properties</h2>
    <p>
      Any additional properties that you pass to the <code>Fields</code> component
      will be forwarded to each of the <FieldLink/> components.
    </p>
    <p>
      For example, if you want all your fields to expand to the full width
      of the container you can pass the <code>wide</code> property and it
      will forward it to each of the <FieldLink/> components.
    </p>
    <Example
      Component={Wide}
      code={WideSrc}
      caption="Wide Fields"
    />
    */}
  </div>

export default FieldsExamples