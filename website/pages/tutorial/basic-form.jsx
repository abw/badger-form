import React          from 'react'
import Example        from '@/site/Example.jsx'
import BasicFormCode  from './_examples/BasicForm.jsx'
import BasicFormSrc   from './_examples/BasicForm.jsx?raw'
import Split          from '@/site/Split.jsx'
import Pager          from '@/site/Pager/index.jsx'
import Suggest        from '@/site/Suggest.jsx'
import { Tutorial }   from '@/site/Menus.jsx'

const BasicForm = () =>
  <div className="prose">
    <h1>A Basic Form</h1>
    <p className="intro wide">
      One of the underlying principles of this library is that it should
      be just as easy, if not easier, to create a form using{' '}
      Badger Form as it should be using vanilla HTML.
    </p>
    <h2>Login Form</h2>
    <Split align="start">
      <div>
        <p>
          So without further ado, let&apos;s look at the one form that most
          websites will require: a user login form.  In this simple example
          there are fields for the user to enter their email address and
          password.
        </p>
      </div>
      <div>
        <Suggest>
          Try entering some values in the form below and click on the
          &quot;Login&quot; button. Also see what happens if you don&apos;t
          enter a value for either field.
        </Suggest>
      </div>
    </Split>
    <Example
      Component={BasicFormCode}
      code={BasicFormSrc}
      caption="Basic Login Form"
      expand
    />
    <Split align="start">
      <div>
        <h3>Form</h3>
        <p>
          The <code>Form</code> component can contain any content so you can
          intersperse form fields with other markup.
        </p>
        <p>
          The <code>onSubmit</code> property should be defined to handle the
          form submission.  If you don&apos;t define one then a window alert
          will be shown when the form is submitted, as demonstrated in this
          example.
        </p>
      </div>
      <div>
        <h3>Field</h3>
        <p>
          The only mandatory property for all <code>Field</code> components is{' '}
          <code>name</code>.  The default <code>type</code> is <code>text</code>{' '}
          and must be provided if you want any other kind of field input type.
          Some additional properties may be required depending on the field
          type.  For example, a <code>select</code> input will also require{' '}
          <code>options</code> to be defined.
        </p>
        <h3>Submit</h3>
        <p>
          A button used to submit the form.  The default text displayed is
          &quot;Submit&quot; which you can change via the <code>text</code> property
          as shown here.
        </p>
      </div>

    </Split>
    <Pager menu={Tutorial}/>
  </div>

export default BasicForm