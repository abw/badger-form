import { useId } from 'react'
import { BLANK } from '../Constants.jsx'

export const prepareField = field => {
  // The form can be passed a large set of fields, not all of which may be
  // used in the form.  We store them in initialFields and migrate them into
  // fields when a field is used inside the form.  We take a copy of the
  // values that we can safely mutate.  This may include values that don't
  // relate to fields that are used in the form (e.g. a record id that must
  // be sent with the submission request).  We store the initial values in
  // initialValues in case we need to reset the form and restore them.
  const { id, value } = field
  return {
    ...field,
    id: id || useId(),
    value: value ?? field.default ?? BLANK,
  }
}

export default prepareField