import React from 'react'
import { FieldValidateOnBlurLink } from '@/site/Links.jsx'

const ValidateOnBlurExamples = () =>
  <>
    <h2 className="font-mono">validateOnBlur</h2>
    <p>
      Fields are usually only validated when the form is submitted.
      You can set the <FieldValidateOnBlurLink/> property to <code>true</code>{' '}
      on individual fields, or on the form to set it as the default for all
      fields.
    </p>
    <p>
      When enabled, fields will be validated whenever the input loses focus.
    </p>

  </>

export default ValidateOnBlurExamples