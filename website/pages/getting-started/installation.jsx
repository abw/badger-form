import React      from 'react'
import CodeBlock  from '@/site/CodeBlock.jsx'
import add        from './_snippets/add?raw'
import use        from './_snippets/use?raw'
import css        from './_snippets/css?raw'
import badger_css from './_snippets/badger_css?raw'

const GettingStarted = () =>
  <div className="container-tablet">
    <h1>Getting Started</h1>
    <h2>Add the Module</h2>
    <p>
      Add the <code className="code">@abw/badger-form</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock
      code={add}
      caption="Installing"
      language="shell"
      className="mar-b-8"
      expand
    />
    <h2>Import the Components</h2>
    <p>
      You can then import the form components and start using them.
    </p>
    <CodeBlock
      code={use}
      caption="Importing"
      language="js"
      className="mar-b-8"
      expand
    />
    <h2>Import the CSS</h2>
    <p>
      Badger Form works out of the box with the form styles provided by{' '}
      <a href="https://abw.github.io/badger-css/">Badger CSS</a>.  If you&apos;re
      already using Badger CSS then you don&apos;t need to do anything else
      as you should already have something like this in your app.
    </p>
    <CodeBlock
      code={badger_css}
      caption="Importing Badger CSS"
      language="js"
      className="mar-b-8"
      expand
    />
    <p>
      If you&apos;re not already using Badger CSS then you&apos;ll need to
      import the relevant CSS styles. As a convenience, they&apos;re bundled
      with this module.  Note that you only need to import <b>either</b> the
      Badger CSS styles as shown above, <b>or</b> the Badger Form styles as
      shown below.
    </p>
    <p>
      The precise details on how you import the CSS will vary depending on
      what framework and bundler you&apos;re using.  For a React app using
      Vite or running under Next.js, for example, you can add the CSS file
      to your main application script like so:
    </p>
    <CodeBlock
      code={css}
      caption="Importing Badger Form CSS"
      language="js"
      className="mar-b-8"
      expand
    />
  </div>

export default GettingStarted