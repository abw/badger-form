import React from 'react'
import Link from './Link.jsx'

// eslint-disable-next-line react/display-name
export const ToCode = (to, code) => (props={}) =>
  <Link to={to} text={<code>{code}</code>} {...props}/>

export const FormLink            = ToCode('/form', 'Form')
export const ValuesLink          = ToCode('/form/values', 'values')
export const FormFieldsLink      = ToCode('/form/fields', 'fields')
export const OnSubmitLink        = ToCode('/form/onsubmit', 'onSubmit')
export const OnSuccessLink       = ToCode('/form/onsuccess', 'onSuccess')
export const FieldLink           = ToCode('/field', 'Field')
export const PrepareValueLink    = ToCode('/field/prepare-value', 'prepareValue')
export const ResetLink           = ToCode('/control/reset', 'Reset')
export const SubmitLink          = ToCode('/control/submit', 'Submit')
export const FieldsNamesLink     = ToCode('/fields/names', 'names')
export const FieldsGridLink      = ToCode('/fields/grid', 'grid')
export const FieldsGapLink       = ToCode('/fields/gap', 'gap')
export const FieldsClassNameLink = ToCode('/fields/class-name', 'className')
