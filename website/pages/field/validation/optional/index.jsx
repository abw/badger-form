import React        from 'react'
import Optional     from './_examples/Optional.jsx'
import OptionalSrc  from './_examples/Optional.jsx?raw'
import SeeAlso      from '@/site/SeeAlso.jsx'
import { Example }    from '@abw/badger-website'
import { FieldOptionalLabelLink, FieldRequiredLink, FieldShowOptionalLink, FieldValidateLink } from '@/website/site/Links.jsx'

const OptionalExample = () =>
  <>
    <h2 className="font-mono">optional</h2>
    <p>
      You can add an <code>optional</code> property to a field to explicitly
      mark it as being optional.  In many cases this won&apos;t have any effect as
      a field is assumed to be optional if it isn&apos;s explicitly marked
      as being <FieldRequiredLink/>{' '}.
    </p>
    <p>
      However, if a <FieldValidateLink/> function is defined for a field
      then it will always be run, even if the field value is empty.
      If you only want the <FieldValidateLink/> function to be run if a
      value has been entered then you can add the <code>optional</code> property
      to the field.  In this case an empty value will be accepted and the{' '}
      <FieldValidateLink/> function will only be run if the user has entered
      something in the field
    </p>
    <p>
      In this example there is a <FieldValidateLink/> function which asserts
      that the value entered is at least 3 characters long.  The first field
      behaves as usual - you must enter a value and it must pass the validation
      function.  The second field has the <code>optional</code> property set.
      In this case an empty value is acceptable, but if you do enter a value
      then it must pass validation.
    </p>
    <Example
      Component={Optional}
      code={OptionalSrc}
      caption="optional"
      expand
    />

    <SeeAlso
      links={[
        FieldShowOptionalLink,
        FieldOptionalLabelLink,
      ]}
    />
  </>

export default OptionalExample