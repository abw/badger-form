import React from 'react'
import Link from '../ui/Link.jsx'
import Badger from '../svg/badger-form.svg?react'
import OSS from '../svg/oss.svg?react'

const Index = () =>
  <div className="pad-t-8">
    <div className="grid-2 gap-12 start stack-laptop">
      <div>
        <Badger className="badger-form mar-t-4"/>
      </div>
      <div>
        <p className="larger">
          Badger Form is a yet another module for building forms in React.  It
          implements state management for forms with styles provided by{' '}
          <a
            href="https://badgerpower.com/badger-css/"
            target="_blank" rel="noreferrer"
          >
            Badger CSS
          </a>.
        </p>
      </div>
    </div>
    <p className="intro">
      It provides default components for rendering form fields which
      simplifies the process of creating and using forms.  You can override
      them with your own field input components, or manually implement the
      layout for individual fields any way you like.
    </p>
    <h2 className="mar-t-8 mar-b-none">Read the Fine Documentation</h2>
    <p className="mar-b-none intro">
      There&apos;s lots of it, complete with numerous examples.  Here are
      some good places to start.
    </p>
    <ul className="large menu mar-t-none pad-l-4">
      <li>
        <Link to="/getting-started/installation" text="Installation"/> - adding the module to your project.
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
        <Link to="/fields" text="The Fields Component"/> - a handy shortcut to add multiple fields
      </li>
    </ul>

    <div className="text-center">
      <OSS className="width-12rem"/>
    </div>
    <h2>This is Opinionated and Selfish Software...</h2>
    <p>
      I wrote this library to help me do my job and make the process of
      working with forms less painful than I found it using other modules.
      It is <i>opinionated</i> because it does things the way I like them
      to be done, and it&apos;s <i>selfish</i> because I have no intention
      of adding things that I don&apos;t need or want.
    </p>
    <h2>...because it&apos;s Open Source Software</h2>
    <p>
      It&apos;s Open Source Software and you can use it if you want to
      for <b>free</b>. You have full access to the source code which you can
      adapt if you need to.  If it proves useful in helping you get your job
      done then that&apos;s great.  But please don&apos;t expect me to
      commit <i>my</i> time to helping <i>you</i> get your job done.
    </p>
    <p>
      If you&apos;re now wondering why you should use this software, the
      short answer is that you probably shouldn&apos;t.  There are now numerous
      other form libraries for React that are probably better suited to your
      needs than this.  The longer answer explaining why I wrote it (because
      those libraries didn&apos;t exist back then) and why I
      continue to use it (because it works for me) can be found{' '}
      <Link to="/getting-started/why-use-it" text="here"/>.
    </p>
  </div>

export default Index

