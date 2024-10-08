import React from 'react'
import { Link } from '@abw/badger-website'

// eslint-disable-next-line react/display-name
export const ToText = (to, text) => (props={}) =>
  <Link to={to} text={text} {...props}/>

// eslint-disable-next-line react/display-name
export const ToCode = (to, code) => (props={}) =>
  <Link to={to} code={code} {...props}/>

// eslint-disable-next-line react/display-name
const ExtLinker = (href, text=href) => (props={}) =>
  <Link
    {...props}
    href={`${href}${props.path||''}`}
    text={props.text||text}
    targetBlank
  />

// form
export const FormLink                   = ToCode('/form', 'Form')
// form properties
export const FormValuesLink             = ToCode('/form/properties/values', 'values')
export const FormFieldsLink             = ToCode('/form/properties/fields', 'fields')
export const FormHiddenLink             = ToCode('/form/properties/hidden', 'hidden')
export const FormDebugLink              = ToCode('/form/properties/debug', 'debug')
export const FormResetOnSuccessLink     = ToCode('/form/properties/resetOnSuccess', 'resetOnSuccess')
export const FormUnvalidateOnSuccessLink  = ToCode('/form/properties/unvalidateOnSuccess', 'unvalidateOnSuccess')

// form validation
export const FormValidateLink           = ToCode('/form/validation/validate', 'validate')
// form events
export const FormOnLoadLink             = ToCode('/form/events/onLoad', 'onLoad')
export const FormOnSubmitLink           = ToCode('/form/events/onSubmit', 'onSubmit')
export const FormOnSuccessLink          = ToCode('/form/events/onSuccess', 'onSuccess')
export const FormOnErrorLink            = ToCode('/form/events/onError', 'onError')
export const FormOnResetLink            = ToCode('/form/events/onReset', 'onReset')
// form functions
export const FormSetFocusLink           = ToCode('/form/functions/setFocus', 'setFocus')
export const FormSetValuesLink          = ToCode('/form/functions/setValues', 'setValues')
export const FormResetLink              = ToCode('/form/functions/reset', 'reset')
export const FormUnvalidateLink         = ToCode('/form/functions/unvalidate', 'unvalidate')

// field
export const FieldLink                  = ToCode('/field', 'Field')
// field properties
export const FieldNameLink              = ToCode('/field/properties/name', 'name')
export const FieldTypeLink              = ToCode('/field/properties/type', 'type')
export const FieldLabelLink             = ToCode('/field/properties/label', 'label')
export const FieldPlaceholderLink       = ToCode('/field/properties/placeholder', 'placeholder')
export const FieldDefaultLink           = ToCode('/field/properties/default', 'default')
export const FieldHelpLink              = ToCode('/field/properties/help', 'help')
export const FieldPrefixLink            = ToCode('/field/properties/prefix', 'prefix')
export const FieldSuffixLink            = ToCode('/field/properties/suffix', 'suffix')
export const FieldClassNameLink         = ToCode('/field/properties/className', 'className')
export const FieldChildrenLink          = ToCode('/field/properties/children', 'children')
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
// field components
export const FieldLayoutLink            = ToCode('/field/components/Layout', 'Layout')
export const FieldLabelComponentLink    = ToCode('/field/components/Label', 'Label')
export const FieldInputLink             = ToCode('/field/components/Input', 'Input')
export const FieldMessageLink           = ToCode('/field/components/Message', 'Message')
export const FieldUseFieldLink          = ToCode('/field/components/UseField', 'UseField')

// fields
export const FieldsLink                 = ToCode('/fields', 'Fields')
export const FieldsNamesLink            = ToCode('/fields/properties/names', 'names')
export const FieldsGridLink             = ToCode('/fields/properties/grid', 'grid')
export const FieldsGapLink              = ToCode('/fields/properties/gap', 'gap')
export const FieldsClassNameLink        = ToCode('/fields/properties/className', 'className')

// fieldset
export const FieldsetLink               = ToCode('/fieldset', 'Fieldset')
export const FieldsetLegendLink         = ToCode('/fieldset/properties/legend', 'legend')

// errors
export const ErrorsLink                 = ToCode('/errors', 'Errors')
export const ErrorsFieldErrorsLink      = ToCode('/errors/properties/fieldErrors', 'fieldErrors')

// debug
export const DebugLink                  = ToCode('/debug', 'Debug')

// reset
export const ResetLink                  = ToCode('/reset', 'Reset')
export const ResetGapLink               = ToCode('/reset-submit/properties/gap', 'gap')
export const ResetSpaceLink             = ToCode('/reset-submit/properties/space', 'space')
export const ResetSizeLink              = ToCode('/reset-submit/properties/size', 'size')
export const CancelGapLink              = ToCode('/cancel-submit/properties/gap', 'gap')
export const CancelSpaceLink            = ToCode('/cancel-submit/properties/space', 'space')
export const CancelSizeLink             = ToCode('/cancel-submit/properties/size', 'size')

// submit
export const SubmitLink                 = ToCode('/submit', 'Submit')

// resetSubmit
export const ResetSubmitLink            = ToCode('/reset-submit', 'ResetSubmit')

// inputs
export const TextInputLink              = ToCode('/text', 'Text')
export const TextInputInlineLink        = ToCode('/text/properties/inline', 'inline')
export const TextInputSizeLink          = ToCode('/text/properties/size', 'size')

export const TextAreaInputLink          = ToCode('/textarea', 'TextArea')
export const TextAreaInputInlineLink    = ToCode('/textarea/properties/inline', 'inline')
export const TextAreaInputColsLink      = ToCode('/textarea/properties/cols',   'cols')
export const TextAreaInputRowsLink      = ToCode('/textarea/properties/rows',   'rows')

export const CheckboxInputLink          = ToCode('/checkbox', 'Checkbox')
export const CheckboxTextLink           = ToCode('/checkbox/properties/text', 'text')

export const RadioInputLink             = ToCode('/radio', 'Radio')
export const RadioOptionsLink           = ToCode('/radio/properties/options', 'options')
export const RadioOptionClassLink       = ToCode('/radio/properties/optionClass', 'optionClass')
export const RadioOptionsClassLink      = ToCode('/radio/properties/optionsClass', 'optionsClass')

export const SelectInputLink            = ToCode('/select', 'Select')
export const SelectOptionsLink          = ToCode('/select/properties/options', 'options')

export const HiddenInputLink            = ToCode('/input/hidden', 'Hidden')
export const CustomInputLink            = ToCode('/input/custom', 'Custom Input')
export const InputTypesLink             = ToText('/input', 'Input Types')

export const BadgerCSSLink     = ExtLinker('https://badgerpower.com/badger-css/',       'Badger CSS')
export const BadgerReactUILink = ExtLinker('https://badgerpower.com/badger-react-ui/',  'Badger React UI')
export const BadgerIconLink    = ExtLinker('https://badgerpower.com/badger-icon/',      'Badger Icon')
export const BadgerColorLink   = ExtLinker('https://badgerpower.com/badger-color/',     'Badger Color')
export const BadgerUILink      = ExtLinker('https://github.com/abw/badger-ui',          'Badger UI')
