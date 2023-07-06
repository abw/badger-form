import React      from 'react'
import CodeBlock  from '../site/CodeBlock.jsx'
import Example    from '../site/Example.jsx'
import Hello      from '../examples/Hello.jsx'
import HelloCode  from '../examples/Hello.jsx?raw'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
    <p>
      Add the <code className="code">@abw/badger-forms</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash">
      {`## using npm
$ npm add @abw/badger-forms

## using yarn
$ yarn add @abw/badger-forms

## using pnpm
$ pnpm add @abw/badger-forms
`}
    </CodeBlock>
    <p>
      You can then import the modules and start using them.
    </p>
    <CodeBlock>
      {`import { Hello } from '@abw/badger-forms'`}
    </CodeBlock>

    <Example Element={Hello} code={HelloCode}>
      <p>
        This is a code example.
      </p>
    </Example>
  </div>

export default GettingStarted