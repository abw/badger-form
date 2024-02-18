import React from 'react'
import Link from './Link.jsx'

// eslint-disable-next-line react/display-name
export const ToCode = (to, code) => (props={}) =>
  <Link to={to} text={<code>{code}</code>} {...props}/>

export const FormLink                   = ToCode('/form', 'Form')
export const FormValuesLink             = ToCode('/form/properties/values', 'values')
export const FormFieldsLink             = ToCode('/form/properties/fields', 'fields')
export const FormHiddenLink             = ToCode('/form/properties/hidden', 'hidden')
export const FormValidateLink           = ToCode('/form/properties/validate', 'validate')
export const FormDebugLink              = ToCode('/form/properties/debug', 'debug')
export const FormOnSubmitLink           = ToCode('/form/events/onSubmit', 'onSubmit')
export const FormOnSuccessLink          = ToCode('/form/events/onSuccess', 'onSuccess')
export const FormOnErrorLink            = ToCode('/form/events/onError', 'onError')

export const FieldLink                  = ToCode('/field', 'Field')
export const FieldNameLink              = ToCode('/field/name', 'name')
export const FieldTypeLink              = ToCode('/field/type', 'type')
export const FieldLabelLink             = ToCode('/field/label', 'label')
export const FieldLayoutLink            = ToCode('/field/Layout', 'Layout')
export const FieldValidateLink          = ToCode('/field/validate', 'validate')
export const FieldMinValidateLengthLink = ToCode('/field/minValidateLength', 'minValidateLength')
export const FieldValidateOnBlurLink    = ToCode('/field/validateOnBlur', 'validateOnBlur')
export const FieldValidateOnChangeLink  = ToCode('/field/validateOnChange', 'validateOnChange')
export const FieldOnChangeLink          = ToCode('/field/onChange', 'onChange')
export const ShowOptionalLink           = ToCode('/field/showOptional', 'showOptional')
export const ShowRequiredLink           = ToCode('/field/showRequired', 'showRequired')

export const TextInputLink              = ToCode('/input/text', 'Text')
export const TextAreaInputLink          = ToCode('/input/textarea', 'TextArea')
export const CheckboxInputLink          = ToCode('/input/checkbox', 'Checkbox')
export const RadioInputLink             = ToCode('/input/radio', 'Radio')
export const SelectInputLink            = ToCode('/input/select', 'Select')
export const HiddenInputLink            = ToCode('/input/hidden', 'Hidden')
export const CustomInputLink            = ToCode('/input/custom', 'Custom Input')

export const DebugLink                  = ToCode('/debug', 'Debug')
export const ErrorsLink                 = ToCode('/errors', 'Errors')
export const FieldsetLink               = ToCode('/fieldset', 'Fieldset')
export const LabelLink                  = ToCode('/label',  'Label')
export const LayoutLink                 = ToCode('/layout', 'Layout')
export const MessageLink                = ToCode('/message', 'Message')


export const PrepareValueLink    = ToCode('/field/prepare-value', 'prepareValue')
export const FieldsLink          = ToCode('/fields', 'Fields')
export const FieldsNamesLink     = ToCode('/fields/names', 'names')
export const FieldsGridLink      = ToCode('/fields/grid', 'grid')
export const FieldsGapLink       = ToCode('/fields/gap', 'gap')
export const FieldsClassNameLink = ToCode('/fields/class-name', 'className')
export const ResetLink           = ToCode('/controls/reset', 'Reset')
export const SubmitLink          = ToCode('/controls/submit', 'Submit')
export const ResetSubmitLink     = ToCode('/controls/reset-submit', 'ResetSubmit')


