import React            from 'react'
import ShowOptional     from './_examples/ShowOptional.jsx'
import ShowOptionalSrc  from './_examples/ShowOptional.jsx?raw'
import Example          from '@/site/Example.jsx'
import SeeAlso          from '@/site/SeeAlso.jsx'
import {
  FieldLink, FieldOptionalLabelLink, FieldRequiredLabelLink,
  FieldRequiredLink, FieldShowRequiredLink, FormLink
} from '@/site/Links.jsx'

const ShowOptionalExample = () =>
  <div className="prose flow">
    <h1>Field Validation</h1>
    <h2 className="font-mono">showOptional</h2>
    <p>
      If a field is <b>NOT</b> marked as <FieldRequiredLink/> then it is optional.
      If you set the <code>showOptional</code> property then it will add an
      additional label to a field to indicate that it&apos;s optional.  You
      can set the property on individual <FieldLink/> components or on the
      parent <FormLink/> to act as a default for all fields.
    </p>
    <p>
      You can use the <FieldOptionalLabelLink/> property to change the text
      of the label that is displayed.
    </p>
    <Example
      Component={ShowOptional}
      code={ShowOptionalSrc}
      caption="showOptional"
      expand
    />
    <SeeAlso
      links={[
        FieldRequiredLink,
        FieldOptionalLabelLink,
        FieldShowRequiredLink,
        FieldRequiredLabelLink
      ]}
    />

  </div>

export default ShowOptionalExample