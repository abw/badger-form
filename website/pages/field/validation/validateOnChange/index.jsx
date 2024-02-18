import React          from 'react'
import OnChangeSrc    from './_examples/OnChange.jsx?raw'
import OnChange       from './_examples/OnChange.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import TryItOut       from '@/site/TryItOut.jsx'
import { FieldMinValidateLengthLink, FieldRequiredLink, FieldValidateLink, FieldValidateOnBlurLink } from '@/site/Links.jsx'

const ValidateOnChangeExamples = () =>
  <div className="prose flow">
    <h1>Field Validation</h1>
    <h2 className="font-mono">validateOnChange</h2>
    <Split>
      <p>
        You can set the <code>validateOnChange</code> flag to enable validation
        any time the field value changes.  The <FieldMinValidateLengthLink/>{' '}
        property can be set to only trigger validation when the input length
        exceeds a threshold.
      </p>
      <TryItOut>
        Enter some text in the field below.  Once you&apos;ve entered three
        letters the validation will kick in.  You should see an error if you
        enter any letters that aren&apos;t vowels.
      </TryItOut>
    </Split>
    <Example
      Component={OnChange}
      code={OnChangeSrc}
      caption="validateOnChange"
    />

    <SeeAlso
      links={[
        FieldRequiredLink,
        FieldValidateLink,
        FieldValidateOnBlurLink,
        FieldMinValidateLengthLink
      ]}
    />
  </div>

export default ValidateOnChangeExamples