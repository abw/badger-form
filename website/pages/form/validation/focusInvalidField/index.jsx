import React from 'react'

const FocusInvalidField = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2 className="font-mono">focusInvalidField</h2>
    <p>
      This property defaults to <code>true</code>.  In this case the first
      field that fails validation will be automatically focussed.
    </p>
    <p>
      You can explicitly set it to <code>false</code> if you need to.
    </p>
  </div>

export default FocusInvalidField