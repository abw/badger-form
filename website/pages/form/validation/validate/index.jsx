import React            from 'react'
import Passwords        from './_examples/Passwords.jsx'
import PasswordsSrc     from './_examples/Passwords.jsx?raw'
import Advanced         from './_examples/Advanced.jsx'
import AdvancedSrc      from './_examples/Advanced.jsx?raw'
import Example          from '@/site/Example.jsx'
import Split            from '@/site/Split.jsx'
import TryItOut         from '@/site/TryItOut.jsx'
import SeeAlso          from '@/site/SeeAlso.jsx'
import { ErrorsLink, FormResetLink, FieldValidateLink } from '@/site/Links.jsx'

const Validation = () =>
  <>
    <h2 className="font-mono">validate</h2>
    <p>
      The <code>validate</code> property can be used to provide a validation
      function for all the form data.  You can also define <FieldValidateLink/>{' '}
      function on individual fields.  The form validation will be run after
      all the fields have validated successfully.  If any individual fields
      fail validation then the form validation is not run.
    </p>

    <h2>Simple Example</h2>
    <Split>
      <div>
        <p>
          The <code>validate</code> function is passed the form values as the
          first argument.
        </p>
        <p>
          If the form validation fails then the function
          should return a rejected promise.  The rejected value should be an
          object containing either an <code>error</code> message, used to
          indicate a generic error and/or an array of <code>errors</code> to
          indicate errors in particular fields.
        </p>
        <p>
          If the validation passes then
          the function should return a resolved promise with the form values.
          The form values can be modified or augmented by the function.
        </p>
      </div>
      <div>
        <p>
          You should include the <ErrorsLink/> component somewhere in your
          form to report any validation errors.  In this example we&apos;re
          setting the <code>fieldErrors</code> property to <code>false</code>{' '}
          so that the component only displays the generic <code>error</code>.
          The separate field <code>errors</code> are already being displayed
          beneath each field input.
        </p>
        <TryItOut>
          Try entering two different passwords in the form below then click
          on the Submit button.
        </TryItOut>
      </div>
    </Split>
    <Example
      Component={Passwords}
      code={PasswordsSrc}
      caption="Form Validation"
    />

    <h2>More Advanced Example</h2>

    <Split align="end">
      <div>
        <p>
          The <code>validate</code> function is passed the form context as
          the second argument.  In this example we call the <FormResetLink/>{' '}
          method to reset the form if the passwords don&apos;t match.
        </p>
        <p>
          Also note that in this example we&apos;re trimming any whitespace
          from the passwords and, if they match, we return a single
          <code>password</code> value in the submission values.
        </p>
      </div>
      <TryItOut>
        Try entering two passwords in the fields below then click on the
        submit button.  Additional leading and trailing whitespace on the
        passwords is removed.
      </TryItOut>
    </Split>
    <Example
      Component={Advanced}
      code={AdvancedSrc}
      caption="Form Validation"
    />
    <SeeAlso
      links={[
        FieldValidateLink
      ]}
    />
  </>

export default Validation