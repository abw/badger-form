import React      from 'react'
import { ReactComponent as Badger } from '../svg/badger-form.svg'
import Link from '../ui/Link.jsx'

const Index = () =>
  <div className="max-width-40rem block-center pad-t-8">
    <Badger className="badger-form"/>
    <h1 className="intro mar-t-8">
      Simple but powerful React forms
    </h1>
    <p>
      Badger Form is a module for building forms in React.  It combines the
      state management of <a href="https://www.react-hook-form.com/">React
      Hook Form</a> with styles provided by{' '}
      <a href="https://abw.github.io/badger-css/">Badger CSS</a>.
    </p>
    <p>
      It provides default components for rendering form fields which
      simplifies the process of creating and using forms.  You can override
      them with your own field input components, or manually implement the
      layout for individual fields any way you like.
    </p>
    <p>
      It also improves upon some of the functionality in React Hook Form
      that I consider to be lacking.  In particular, the field validation
      functionality has been extended so that you can use validation
      libraries like Yup, Joi, etc., without the need for an adapter.
    </p>
    <div className="error alert border bdw-2 shadow-2">
      <h2>WARNING</h2>
      <p>
        This is a work in progress.  It is only partially documented,
        is woefully under-tested, and it&apos;s liable to change without
        any notice.
      </p>
    </div>
    <h2 className="mar-t-8 mar-b-none">Read the Fine Documentation</h2>
    <ul className="large menu mar-t-none">
      <li>
        <Link to="getting-started" text="Getting Started"/> - adding the module to your project.
      </li>
      <li>
        <Link to="/tutorial/basic-form" text="A Basic Form"/> - rendering your first form
      </li>
      <li>
        <Link to="/form" text="The Form Component"/> - a detailed look at the form container
      </li>
      <li>
        <Link to="/field" text="The Field Component"/> - adding a field to a form
      </li>
      <li>
        <Link to="/fields" text="The Fields Component"/> - adding multiple fields to a form
      </li>
      <li>
        <Link to="/controls" text="Form Controls"/> - to reset and submit a form
      </li>
    </ul>
  </div>

export default Index

