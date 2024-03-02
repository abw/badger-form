import React          from 'react'
import { FieldValidateOnBlurLink, FieldValidateOnChangeLink } from '@/site/Links.jsx'

const ValidateOnInvalidExamples = () =>
  <>
    <h2 className="font-mono">validateOnInvalid</h2>
    <p>
      Fields are normally validated when the form is submitted.
      The <FieldValidateOnChangeLink/> and <FieldValidateOnBlurLink/> options can
      be set to change this.
    </p>
    <p>
      If a field fails validation it will then switch to validating on
      change.  This option can be set to <code>false</code> to prevent
      this behaviour.
    </p>
  </>


export default ValidateOnInvalidExamples