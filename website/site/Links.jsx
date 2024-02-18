import React from 'react'
import Link from './Link.jsx'

// eslint-disable-next-line react/display-name
export const ToText = (to, text) => (props={}) =>
  <Link to={to} text={text} {...props}/>

// eslint-disable-next-line react/display-name
export const ToCode = (to, code) => (props={}) =>
  <Link to={to} text={<code>{code}</code>} {...props}/>

export const FormLink                   = ToCode('/form', 'Form')
export const FormValuesLink             = ToCode('/form/properties/values', 'values')
export const FormFieldsLink             = ToCode('/form/properties/fields', 'fields')
export const FormHiddenLink             = ToCode('/form/properties/hidden', 'hidden')
export const FormValidateLink           = ToCode('/form/properties/validate', 'validate')
export const FormDebugLink              = ToCode('/form/properties/debug', 'debug')
export const FormOnLoadLink             = ToCode('/form/events/onLoad', 'onLoad')
export const FormOnSubmitLink           = ToCode('/form/events/onSubmit', 'onSubmit')
export const FormOnSuccessLink          = ToCode('/form/events/onSuccess', 'onSuccess')
export const FormOnErrorLink            = ToCode('/form/events/onError', 'onError')
export const FormOnResetLink            = ToCode('/form/events/onReset', 'onReset')
export const FormResetLink              = ToCode('/form/functions/reset', 'reset')

export const FieldLink                  = ToCode('/field', 'Field')
// field properties
export const FieldNameLink              = ToCode('/field/properties/name', 'name')
export const FieldTypeLink              = ToCode('/field/properties/type', 'type')
export const FieldLabelLink             = ToCode('/field/properties/label', 'label')
export const FieldPlaceholderLink       = ToCode('/field/properties/placeholder', 'placeholder')
export const FieldHelpLink              = ToCode('/field/properties/help', 'help')
export const FieldPrefixLink            = ToCode('/field/properties/prefix', 'prefix')
export const FieldSuffixLink            = ToCode('/field/properties/suffix', 'suffix')
export const FieldChildrenLink          = ToCode('/field/properties/children', 'suffix')
// field validation
export const FieldRequiredLink          = ToCode('/field/validation/required', 'required')
export const FieldShowRequiredLink      = ToCode('/field/validation/showRequired', 'showRequired')
export const FieldRequiredLabelLink     = ToCode('/field/validation/requiredLabel', 'requiredLabel')
export const FieldRequiredMessageLink   = ToCode('/field/validation/requiredMessage', 'requiredMessage')
export const FieldShowOptionalLink      = ToCode('/field/validation/showOptional', 'showOptional')
export const FieldOptionalLabelLink     = ToCode('/field/validation/optionalLabel', 'optionalLabel')
export const FieldPrepareValueLink      = ToCode('/field/validation/prepareValue', 'prepareValue')
export const FieldValidateLink          = ToCode('/field/validation/validate', 'validate')
export const FieldValidateOnBlurLink    = ToCode('/field/validation/validateOnBlur', 'validateOnBlur')
export const FieldValidateOnChangeLink  = ToCode('/field/validation/validateOnChange', 'validateOnChange')
export const FieldValidateOnInvalidLink = ToCode('/field/validation/validateOnInvalid', 'validateOnInvalid')
export const FieldMinValidateLengthLink = ToCode('/field/validation/minValidateLength', 'minValidateLength')
// field events
export const FieldOnFocusLink           = ToCode('/field/events/onFocus', 'onFocus')
export const FieldOnBlurLink            = ToCode('/field/events/onBlur', 'onBlur')
export const FieldOnChangeLink          = ToCode('/field/events/onChange', 'onChange')
export const FieldOnValidLink           = ToCode('/field/events/onValid', 'onValid')
export const FieldOnInvalidLink         = ToCode('/field/events/onInvalid', 'onInvalid')
export const FieldOnLoadLink            = ToCode('/field/events/onLoad', 'onLoad')
// field functions
export const FieldSetFocusLink          = ToCode('/field/functions/setFocus', 'setFocus')
export const FieldSetValueLink          = ToCode('/field/functions/setValue', 'setValue')
export const FieldSetValidLink          = ToCode('/field/functions/setValid', 'setValid')
export const FieldSetInvalidLink        = ToCode('/field/functions/setInvalid', 'setInvalid')
export const FieldResetLink             = ToCode('/field/functions/reset', 'reset')

export const FieldLayoutLink            = ToCode('/field/Layout', 'Layout')

export const TextInputLink              = ToCode('/input/text', 'Text')
export const TextAreaInputLink          = ToCode('/input/textarea', 'TextArea')
export const CheckboxInputLink          = ToCode('/input/checkbox', 'Checkbox')
export const RadioInputLink             = ToCode('/input/radio', 'Radio')
export const SelectInputLink            = ToCode('/input/select', 'Select')
export const HiddenInputLink            = ToCode('/input/hidden', 'Hidden')
export const CustomInputLink            = ToCode('/input/custom', 'Custom Input')
export const InputTypesLink             = ToText('/input', 'Input Types')

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


