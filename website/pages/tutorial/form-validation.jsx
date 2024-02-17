import React            from 'react'
import Example          from '@/site/Example.jsx'
import TutorialPager    from '@/site/Pager/Tutorial.jsx'
import Split            from '@/site/Split.jsx'
import Suggest          from '@/site/Suggest.jsx'
import PasswordCheck    from './_examples/PasswordCheck.jsx'
import PasswordCheckSrc from './_examples/PasswordCheck.jsx?raw'
import {
  ErrorsLink, FieldsLink, FormLink, FormValidateLink
} from '@/site/Links.jsx'

export const metadata = {
  title: 'Form Validation',
}

const FormValidation = () =>
  <div className="prose">
    <h1>Form Validation</h1>
    <p className="intro wide">
      Sometimes you need access to all the submitted field values to validate
      the form.  The classic example is a registration form where you ask the
      user to enter their password twice to make sure that they&apos;re sure
      about what they&apos;ve entered.  Although this isn&apos;t necessarily
      considered good practice these days, it illustrates the principle well.
    </p>

    <h2>Registration Form With Validation</h2>
    <Split>
      <div>
        <p>
          You can add a <FormValidateLink/> property to a form to provide a
          function to validate the inputs from all fields.  The function will be
          called after the field-level validation, and only if all fields have
          validated successfully.
        </p>
        <p>
          The function will be passed a <code>values</code> object containing
          the validated field values.  It should return a Promise that resolves
          with the (possibly modified) values if the input is valid, or rejects
          with an an <code>error</code> and/or array of <code>errors</code> if not.
        </p>
        <p>
          The <code>error</code> can be used to define an error for the form that
          isn&apos;t specific to any particular field.  In this case it&apos;s
          being used to raise an error indicating that the two passwords entered
          don&apos;t match.
        </p>
        <p>
          Each item in the <code>errors</code> array should relate to a field identified
          by <code>name</code>, with an additional <code>message</code>{' '}
          indicating why it is invalid.  In this case we&apos;re also raising
          errors for both password fields.
        </p>
      </div>
      <div>
        <p>
          The <ErrorsLink/> component can used to insert a prominent alert
          anywhere in the form, warning the user about what&apos;s
          gone wrong.  By default it will display any generic <code>error</code>{' '}
          and also a list of any field-specific <code>errors</code>.  But here
          we&apos;re relying on the fact that the field errors will be displayed
          underneath each field input, so we&apos;re setting the {' '}
          <code>fieldErrors</code> flag to <code>false</code> to suppress the{' '}
          <code>errors</code> list.
        </p>
        <p>
          We&apos;re also using this opportunity to introduce you to the{' '}
          <FieldsLink/> component which allows you to add multiple fields to
          a <FormLink/> in one fell swoop.
        </p>
        <Suggest>
          Try entering some values in the form below and click on the{' '}
          <b>Register</b> button. You should see the field level validation
          errors if you don&apos;t provide a valid value for any field. Or if
          you provide different values for the Password and Confirm Password
          fields then you should see the form validation errors.
        </Suggest>
      </div>
    </Split>
    <Example
      Component={PasswordCheck}
      code={PasswordCheckSrc}
      caption="Form Validation"
      // expand
    />
    <h2>Where Next?</h2>
    <p>
      Now that we&apos;ve handled the validation of the form we can talk
      about how the form is submitted.
    </p>
    <TutorialPager uri="form-validation"/>
  </div>

export default FormValidation