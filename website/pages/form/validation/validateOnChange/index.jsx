import React from 'react'
import { FieldValidateOnChangeLink } from '@/site/Links.jsx'

const ValidateOnChangeExamples = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2 className="font-mono">validateOnChange</h2>
    <p>
      Fields are usually only validated when the form is submitted.
      You can set the <FieldValidateOnChangeLink/> property
      to <code>true</code>{' '} on individual fields, or on the form to
      set it as the default for all fields.
    </p>
    <p>
      When enabled, fields will be validated whenever the input changes.
    </p>
  </div>

export default ValidateOnChangeExamples