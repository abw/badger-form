import React    from 'react'
import HelpSrc  from './_examples/Help.jsx?raw'
import Help     from './_examples/Help.jsx'
import Example  from '@/site/Example.jsx'
import SeeAlso  from '@/site/SeeAlso.jsx'
import Split    from '@/site/Split.jsx'
import TryItOut from '@/site/TryItOut.jsx'
import { FieldLabelLink, FieldNameLink, FieldRequiredLink, FieldValidateLink, FormFieldsLink } from '@/website/site/Links.jsx'

const HelpExamples = () =>
  <div className="prose flow">
    <h1>Field Properties</h1>

    <h2 className="font-mono">help</h2>
    <Split align="end">
      <div>
        <p>
          The <code>help</code> property can be used to define some additional
          help for the user.  By default it is displayed underneath the field
          input.
        </p>
        <p>
          If the field input fails to validate then the validation error message
          will be displayed in its place.
        </p>
      </div>
      <TryItOut>
        Try submitting the form without entering any value.  You should see
        the help message replaced by the validation error.
      </TryItOut>
    </Split>
    <Example
      Component={Help}
      code={HelpSrc}
      caption="help"
    />
    <SeeAlso
      links={[
        FieldNameLink,
        FieldLabelLink,
        FieldRequiredLink,
        FieldValidateLink,
        FormFieldsLink
      ]}
    />
  </div>


export default HelpExamples