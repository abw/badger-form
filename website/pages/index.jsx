import React      from 'react'
import { ReactComponent as Badger } from '../svg/badger-form.svg'
import Link from '../ui/Link.jsx'

const Index = () =>
  <div className="mobile center pad-t-8">
    <Badger className="badger-form"/>
    <h1 className="intro mar-t-8">
      Simple but powerful React forms
    </h1>
    <p>
      Badger Form is a module for building forms in React.  It combines the
      state management of <a href="https://www.react-hook-form.com/">React
      Hook Form</a> with styles provided by{' '}
      <a href="https://abw.github.io/badger-css/">Badger CSS</a>
    </p>
    <div className="error alert border bdw-2 shadow-2">
      <h2>WARNING</h2>
      <p>
        This is a work in progress.  It is largely undocumented, untested
        and liable to change.
      </p>
    </div>
    <ul className="large menu">
      <li>
        <Link to="getting-started" text="Getting Started"/> - adding the module to your project.
      </li>
    </ul>
  </div>

export default Index

