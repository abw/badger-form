import React from 'react'
import { FieldValidateOnInvalidLink } from '@/site/Links.jsx'

const ValidateOnChangeExamples = () =>
  <>
    <h2 className="font-mono">validateOnInvalid</h2>
    <p>
      This option is set <code>true</code> by default.
      You can set the <FieldValidateOnInvalidLink/> property
      to <code>false</code> on individual fields, or on the form to
      set it as the default for all fields.
    </p>
    <p>
      If a field fails validation then this option switches it to
      validate whenever the input changes.
    </p>
  </>

export default ValidateOnChangeExamples