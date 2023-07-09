import React from 'react'
import Link from './Link.jsx'

// eslint-disable-next-line react/display-name
export const ToCode = (to, code) => (props={}) =>
  <Link to={to} text={<code>{code}</code>} {...props}/>

export const FormLink         = ToCode('/form', 'Form')
export const ValuesLink       = ToCode('/form/values', 'values')
export const OnSubmitLink     = ToCode('/form/onsubmit', 'onSubmit')
export const FieldLink        = ToCode('/field', 'Field')
export const PrepareValueLink = ToCode('/field/prepare-value', 'prepareValue')
export const ResetLink        = ToCode('/control/reset', 'Reset')
export const SubmitLink       = ToCode('/control/submit', 'Submit')
