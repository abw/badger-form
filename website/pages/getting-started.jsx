import React      from 'react'
import CodeBlock  from '../site/CodeBlock.jsx'
import add        from '../snippets/install/add?raw'
import use        from '../snippets/install/use?raw'
import css        from '../snippets/install/css?raw'
// import Example    from '../site/Example.jsx'
// import Hello      from '../examples/Hello.jsx'
// import HelloCode  from '../examples/Hello.jsx?raw'

const GettingStarted = () =>
  <div>
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
      The precise details on how you import the CSS will vary depending on
      what framework and bundler you&apos;re using.  For a React app using
      Vite or running under Next.js, for example, you can add the CSS file
      to your main application script like so:
    </p>
    <CodeBlock
      code={css}
      caption="Importing CSS"
      language="js"
      className="mar-b-8"
      expand
    />
  </div>

export default GettingStarted