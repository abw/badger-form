import React from 'react'
import Link from '@/ui/Link.jsx'

const WhyUseIt = () =>
  <div className="container-tablet flow">
    <h1>Why Use It?</h1>
    <h2> I know what you&apos;re thinking... </h2>
    <ul>
      <li>What does the World need with another React form library?</li>
      <li>What makes this different, better, and/or worse than all the other form libraries?  </li>
      <li>Will this guy do my homework for me?</li>
      <li>Why do we exist?  </li>
      <li>What is the meaning of life? </li>
      <li>Where did I leave my car keys? </li>
      <li>And what is it with all the badgers?</li>
    </ul>
    <p>
      <b>None</b> of these questions will be answered, at least not directly.
      You can read the copious documentation provided here if you want to
      find out more.  Or don&apos;t.  It makes no difference to me.  Seriously,
      I&apos;m not looking to convince you that this is any better or worse
      than any other form library.  I&apos;m not interested in attracting new
      users or changing the world.  Been there, done that, burned out.
    </p>

    <h2>Still With Me?</h2>
    <p className="subintro">
      OK then, but proceed at your own risk.
    </p>
    <p>
      Read on for more information about what this library sets out to
      achieve.  If you just want to see it in action then feel free to skip
      the rest of this page and go straight to the{' '}
      <Link to="/tutorial/basic-form" text="tutorial"/>.
    </p>
    <h2>Key Features</h2>
    <p className="subintro">
      These are some of the things that I think are important in a form
      library and have influenced the design.
    </p>
    <ul className="li-space">
      <li>
        Above all else, <b>simplicity</b>.  Building a form with{' '}
        <code>badger-form</code> should be <i>at least</i> as easy as
        defining a vanilla HTML form, and ideally, easier.
        I don&apos;t want to have to build every field manually from separate
        components.  In most cases I want my fields to include a label, an
        input, and somewhere for validation messages to go.  So there
        should be a sensible default layout that takes care of that for me.
      </li>
      <li>
        Closely related to that is <b>consistency</b>.
        In the vast majority of cases I want all my forms and fields to
        look the same and conform to whatever branding and/or style guide
        I&apos;ve got in place.  I don&apos;t mind spending a bit of time up
        front to get everything looking right, but after that I just want to
        &quot;push a button&quot; and get the same results every time with the
        minimum of fuss.
      </li>
      <li>
        And that brings us on to <b>maintainability</b>.  The less markup
        I have to write, the less I have to maintain, and the easier it will
        be to do so.  If the client or a designer decides they want all the
        form fields to have the label in a different place, be aligned
        differently, have more padding, or something else, then I want to be
        able to change that in a single place.  It might mean changing
        some CSS, re-defining a style, or updating a single field layout
        component.  But I certainly don&apos;t want to have to go and edit
        every field in every form to make the change.
      </li>
      <li>
        Of course there are times when you want to do something a bit different,
        so <b>flexibility</b> is also important.  It&apos;s good to have a
        default layout for <i>most</i> of your form fields, but you also need
        to be able to switch something else in for those special cases.
        This should be easy, not hard.
      </li>
      <li>
        <b>Extensibility</b> is also important for those times when there
        isn&apos;t something available off-the-shelf and you need to get your
        hands dirty and write a custom component.  Maybe you need a custom
        autocomplete component or search widget.  Maybe you need to include
        Recaptcha validation, or something else that requires aynchronous
        calls to an API.  I don&apos;t know what you might need.  I can&apos;t
        even predict what I might need this time next week.  So it&apos;s
        important that the library exposes enough of the internal workings to
        allow you to plug new things in.  It might not be easy, but it should
        be possible.
      </li>
      <li>
        None of that would be possible without <b>reliability</b>.  We need to
        be able to trust the library to &quot;Do The Right Thing&quot; and
        that means it has to be well tested.  This library has <i>lots</i> of
        automated tests with almost 100% coverage (the exceptions are a few
        edge cases that would be pointless to try and cover just for the sake
        of hitting 100%).
      </li>
      <li>
        Another concern is <b>security</b>. It supports client-side and
        server-side validation.  If for some reason an invalid input gets past
        the client-side validation and generates an angry response from the
        server then it can update the form to display the errors and highlight
        the invalid field(s).  Although it&apos;s not in the library yet,
        I&apos;ve been toying with the idea of <i>isomorphic validation</i>,
        allowing you to use the same validation rules for both client-side and
        server-side code.
      </li>
      <li>
        And talking of concerns, we like to separate them, so <b>modularity</b>{' '}
        is important.  You should be able to define the schema for a form and
        all of its fields (including validation) in a single place, possibly
        away from the markup used to render the form.  Being able to separate
        the &quot;logic&quot; of a form from the presentational aspects make
        it easier to update both in isolation.
      </li>
      <li>
        One often overlooked aspect is <b>accessibility</b>.  The library
        uses vanilla HTML form elements by default because they offer the
        best accessibility across different browsers and devices (anyone who
        has ever tried to use some of the popular select widgets or date
        pickers on a mobile device may know what I mean). You can always plug
        in different input components if you want to, but you shouldn&apos;t
        overlook <a href="https://www.w3.org/WAI/standards-guidelines/aria/">WAI-ARIA</a>{' '}
        compliance.  Your design may look great but if it&apos;s not usable by
        people with disabilities (or people who just prefer to use the keyboard
        for form navigation) then it&apos;s broken and you should feel bad.
      </li>
      <li>
        Functionality is paramount, but we also care about <b>presentability</b>.
        It comes with a default stylesheet that provides reasonable defaults
        for styling different form components and all their states (focussed,
        valid, invalid, disabled, etc).  It comes with both light and dark
        themes and is written using SASS and CSS variables so you can easily
        change the styling.
        There&apos;s a single variable that you can set to change the basic
        theme colour to match your brand so you can get up and running really
        quickly.  As and when you need to change styles, add new components,
        or make other changes then you generally can with the minimum of fuss.
      </li>
      <li>
        And last, but not least, <b>efficiency</b>.  The library is
        comparatively small and simple (less than 10kB for the compressed
        bundle at the time of writing). It only works with modern (v18+)
        versions of React and there are no plans to port it to other web
        frameworks.  It doesn&apos;t set out to please all of the people
        all of the time.  Rather, it is designed to please me, most of the
        time, and as such it may not have (and may never have) all the
        features that other people might want.  You are, of course, free to
        go and write your own form library.
      </li>
    </ul>

    <h2>Why Not Just Use <code>&lt;ANOTHER FORM LIBRARY&gt;</code>?</h2>
    <p className="subintro">
      Go for it.  This is software that I wrote for me.  I&apos;m not
      suggesting that it&apos;s the right solution for you.  But if you want
      to know why I wrote it, then read on...
    </p>
    <p>
      This library started out a few years back when the state of the art in
      React form libraries wasn&apos;t quite where it is today.
      React 16.3 had just been released with its shiny new contexts and I
      thought it might be a better way to build a form library than what we
      had at the time.  So I did and it turned out pretty well.  It was
      designed by me, for me, and unsurprisingly it met my particular needs
      particularly well.  It may not meet yours.
    </p>
    <p>
      Over the years I&apos;ve built a <i>lot</i> of forms with it for
      various different customers.  I don&apos;t much fancy the idea of having
      to re-write hundreds of forms that already work Just Fine™ and I
      don&apos;t imagine my customers would want to pay me to do it either.
      So I still use it, and have occasional bursts of development/maintenance
      where I add new features, clean up ugly bits of code, fix minor bugs
      or limitations that have been annoying me for a while, or update the
      documentation and examples.  That&apos;s what I&apos;m doing right now,
      as it happens.
    </p>
    <p>
      For the last few years it&apos;s been an integral part
      of my <a href="https://github.com/abw/badger-ui">badger-ui</a> library
      but I&apos;m now trying to break things up a little bit and extract some
      of the reusable functionality into different modules.  So that&apos;s
      how we got here.
    </p>
    <p>
      But the best reason of all is that I built it because I <i>wanted</i> to.
      I like writing software.  I like solving problems.  Sometimes that means
      spending my weekends re-inventing wheels that happen to fit my skateboard
      a bit better than all the other wheels out there.  That&apos;s all the
      justification I need.  You are, of course, free to have a different
      opinion and use whatever tools best fit your needs.
    </p>
  </div>

export default WhyUseIt