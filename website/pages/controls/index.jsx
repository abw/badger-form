import React from 'react'
import ControlsPager from '../../site/Pager/ControlsPager.jsx'
import { ResetLink, ResetSubmitLink, SubmitLink } from '../../site/Links.jsx'

const ControlsIndex = () =>
  <div className="prose">
    <h1>Controls</h1>
    <p>
      The two individual form controls are <ResetLink/> to reset a form
      and <SubmitLink/> to submit it.
    </p>
    <p>
      There is also the <ResetSubmitLink/> control which renders both
      as a shortcut.
    </p>

    <ControlsPager/>
  </div>

export default ControlsIndex