import React from 'react'
import Link from '../ui/Link.jsx'
import Badger from '../svg/badger-form.svg?react'
import OSS from '../svg/oss.svg?react'

const Index = () =>
  // <div className="max-width-40rem block-center pad-t-8">
  <div className="pad-t-8">
    <div className="grid-2 gap-12 start stack-laptop">
      <div>
        <Badger className="badger-form mar-t-4"/>
      </div>
      <div>
        <p className="larger">
          Badger Form is a yet another module for building forms in React.  It
          implements state management for forms with styles provided by{' '}
          <a href="https://abw.github.io/badger-css/">Badger CSS</a>.
        </p>
      </div>
    </div>
    <p className="intro">
      It provides default components for rendering form fields which
      simplifies the process of creating and using forms.  You can override
      them with your own field input components, or manually implement the
      layout for individual fields any way you like.
    </p>
    {/*
    <div className="error alert border bdw-2 shadow-2 mar-v-16">
      <div className="headline">WARNING - Work in Progress</div>
      <p className="bold large">
        Do not use this library unless you like living dangerously!
      </p>
      <p>
        It&apos;s in the process of being re-written and it&apos;s special.
        Look... see... still got the uh... the ol&apos; tagger on it... see...
        never even played it... Don&apos;t touch it!  Don&apos;t touch it!
        No one... no one... no!  Don&apos;t touch it. Don&apos;t point, even.
        No.  It can&apos;t be played... never... I mean...
      </p>
      <p className="mar-b-0 bold fgc-30 fgd-80">
        Don&apos;t even
        look at it.  You&apos;ve seen enough of that one.
      </p>
    </div>
    */}

    <h2 className="mar-t-8 mar-b-none">Read the Fine Documentation</h2>
    <ul className="large menu mar-t-none">
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

