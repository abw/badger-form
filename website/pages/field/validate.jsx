import React        from 'react'
import Example      from '../../site/Example.jsx'
import BuiltinCode  from '../../examples/field/validate/Builtin.jsx'
import BuiltinSrc   from '../../examples/field/validate/Builtin.jsx?raw'
import FunctionCode from '../../examples/field/validate/Function.jsx'
import FunctionSrc  from '../../examples/field/validate/Function.jsx?raw'
// import MessageCode  from '../../examples/field/validate/Message.jsx'
// import MessageSrc   from '../../examples/field/validate/Message.jsx?raw'
import ThrowCode    from '../../examples/field/validate/Throw.jsx'
import ThrowSrc     from '../../examples/field/validate/Throw.jsx?raw'
import PromiseCode  from '../../examples/field/validate/Promise.jsx'
import PromiseSrc   from '../../examples/field/validate/Promise.jsx?raw'
import PassFailCode from '../../examples/field/validate/PassFail.jsx'
import PassFailSrc  from '../../examples/field/validate/PassFail.jsx?raw'
import FieldPager   from '../../site/Pager/FieldPager.jsx'
import Split from '../../site/Split.jsx'

const Validate = () =>
  <div className="prose">
    <h1>Field</h1>
    <div className="alert warning border">
      <Split>
        <div>
          <h3>Some Documentation/Examples are TODO</h3>
          <p className="wide">
            The default validation supported by React Hook Form is very limited.
            A validation function should only return <code>true</code>,{' '}
            <code>false</code> or an error message.  This seems rather limiting
            to me.  For example, it prevents you from using Yup, Joi or any other
            validation library that throws errors (RHF does support it, but you
            have to use an adaptor).
          </p>
          <p className="wide">
            I&apos;ve written some wrapper code which removes these limitations.
            A <code>validate</code> function can continue to return{' '}
            <code>true</code> or <code>false</code>, but can also throw
            an error, return a resolved or rejected promise, or use the
            <code>pass</code> and <code>fail</code> functions passed to it
            (I might rename/alias these to <code>resolve</code> and <code>reject</code>).
          </p>
        </div>
        <div>
          <h3>Functionality lacking documentation:</h3>
          <ul className="pad-l-4">
            <li>
              A validation function can return the modified value.  For example,
              you might have the validation function trim the input and return
              the modified value.
            </li>
            <li>
              A validation function can return an object with <code>value</code> (containing
            a modified value) and <code>message</code> (for the error or success message).
            </li>
            <li>
              Similarly a Promise can be resolved or rejected with an object
              containing <code>value</code> and/or <code>message</code>.
            </li>
          </ul>
        </div>
      </Split>
    </div>

    <h2>HTML Validation</h2>
    <Split align="end">
      <div>
        <p>
          You can use any of the standard{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation">HTML Form Validation</a>{' '}
          properties to validate field values.
        </p>
        <p>
          In this example the <code>username</code> field is <code>required</code>,
          has a <code>minLength</code> of 3 and a <code>maxLength</code> of 11
          (it&apos;s one louder).  The <code>required</code> property is a boolean
          flag.  The other validation rules expect a value.
        </p>
        <p>
          A default error message will be generated
          if the field fails to validate.  Alternately, you can provide a
          custom message by setting the property to an object containing
          a <code>value</code> and <code>message</code>, as shown here
          for <code>maxLength</code>.
        </p>
      </div>
      <div>
        <div className="info alert border">
          <p>
            Try submitting the form without entering a value for the Username
            field.  Then try entering a value that is shorted than 3 characters,
            and then one which is longer than 11.
          </p>
          <p>
            The usual behaviour is for a field to be validated when the form
            is submitted.  However, once a field has failed validation it will
            switch to validating whenever the input changes.  This is generally
            considered to provide the best user experience.  If you reset the
            form the field will go back to validating on submit.
          </p>
        </div>
      </div>
    </Split>

    <Example
      Component={BuiltinCode}
      code={BuiltinSrc}
      caption="Builtin Field Validation"
      expand
    />

    <h2 className="font-mono">validate</h2>
    <p>
      The <code>validate</code> property can be used to provider a validation
      function for a field.  The function will be passed the input value and
      should return <code>true</code> if it&apos;s valid, or <code>false</code>{' '}
      if not.
    </p>
    <Example
      Component={FunctionCode}
      code={FunctionSrc}
      caption="Validate Function"
      expand
    />

    {/* This is something that RHF support, but we don't - we want to be
        able to use Yup (for example) which returns the (potentially modified)
        input
    */}
    {/*
    <p>
      The <code>validate</code> function can also return an error message.
    </p>
    <Example
      Component={MessageCode}
      code={MessageSrc}
      caption="Validate Error Message"
      expand
    />
    */}
    <p>
      The <code>validate</code> function can also throw an error message.
    </p>
    <Example
      Component={ThrowCode}
      code={ThrowSrc}
      caption="Validate Error Message"
      expand
    />
    <p>
      The <code>validate</code> function can return a resolved Promise
      for a valid value or a rejected Promise for an invalid one.
    </p>
    <Example
      Component={PromiseCode}
      code={PromiseSrc}
      caption="Validate Promise"
      expand
    />

    <p>
      The <code>validate</code> function is passed an object as the second
      argument.  This contains <code>pass</code> and <code>fail</code> functions
      which can be called to register the state of the field.
    </p>
    <Example
      Component={PassFailCode}
      code={PassFailSrc}
      caption="Validate Pass/Fail"
      expand
    />

    <FieldPager/>
  </div>

export default Validate