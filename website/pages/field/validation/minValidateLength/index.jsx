import React        from 'react'
import Validate     from './_examples/Validate.jsx'
import ValidateSrc  from './_examples/Validate.jsx?raw'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'
import Split        from '@/site/Split.jsx'
import TryItOut     from '@/site/TryItOut.jsx'
import {
  FieldRequiredLink, FieldValidateLink, FieldValidateOnBlurLink,
  FieldValidateOnChangeLink
} from '@/site/Links.jsx'

const MinValidateLengthExamples = () =>
  <>
    <h2 className="font-mono">minValidateLength</h2>
    <Split>
      <p>
        You can set the <FieldValidateOnChangeLink/> property flag to enable
        validation any time the field value changes.  The{' '}
        <code>minValidateLength</code> property can
        be set to only trigger validation when the input length exceeds a
        threshold.
      </p>
      <TryItOut>
        Enter a username in the form below.  The usernames <code>alice</code>,
        <code>bob</code> and <code>charlie</code> will return a validation
        error saying that they&apos;re not available.  There&apos;s a minimum
        length for a username so we wait until at least three characters have
        been entered before checking to see if the username is available.  Note
        that the validation will also be triggered when the form is submitted,
        regardless of how many characters have been entered.  For that reason
        the validation function also rejects any username that is too short.
      </TryItOut>
    </Split>
    <Example
      Component={Validate}
      code={ValidateSrc}
      caption="minValidateLength"
    />

    <SeeAlso
      links={[
        FieldRequiredLink,
        FieldValidateLink,
        FieldValidateOnBlurLink,
        FieldValidateOnChangeLink,
      ]}
    />
  </>


export default MinValidateLengthExamples