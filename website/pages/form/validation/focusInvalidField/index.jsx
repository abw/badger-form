import React from 'react'

const FocusInvalidField = () =>
  <>
    <h2 className="font-mono">focusInvalidField</h2>
    <p>
      This property defaults to <code>true</code>.  In this case the first
      field that fails validation will be automatically focussed.
    </p>
    <p>
      You can explicitly set it to <code>false</code> if you need to.
    </p>
  </>

export default FocusInvalidField