import React         from 'react'
import Message       from './_examples/Message.jsx'
import MessageSrc    from './_examples/Message.jsx?raw'
import Custom        from './_examples/CustomMessage.jsx'
import CustomSrc     from './_examples/CustomMessage.jsx?raw'
import Example       from '@/site/Example.jsx'
import Split         from '@/site/Split.jsx'
import TryItOut      from '@/site/TryItOut.jsx'
import { FieldLink } from '@/site/Links.jsx'

const MessageExamples = () =>
  <div className="prose flow">
    <h1>Field Components</h1>
    <h2 className="font-mono">Message</h2>
    <p>
      The <code>Message</code> component is used to add a message underneath
      a <FieldLink/>. It&apos;s usually added automatically, but it&apos;s
      useful if you&apos;re implementing your own layout for a field.
    </p>
    <Split>
      <p>
        If you have defined <code>help</code> for your field then it will be
        displayed here.  If the field fails to validate then the validation
        error message will be displayed.  In this example we&apos;re setting
        an explicit <code>requiredMessage</code> to override the default message.
        We&apos;re also setting a <code>validMessage</code> to provide a custom
        message if the field is valid.
      </p>
      <TryItOut>
        Try submitting the form without entering a value.  You should see
        the <code>help</code> message be replaced by the{' '}
        <code>requiredMessage</code> error message.
      </TryItOut>
    </Split>
    <Example
      Component={Message}
      code={MessageSrc}
      caption="Message"
      expand
    />

    <h2>Custom Message Component</h2>
    <p>
      You can define your own component to handle the message for a field
      using the <code>Message</code> field property.
    </p>
    <Example
      Component={Custom}
      code={CustomSrc}
      caption="Custom Message Component"
      expand
    />
  </div>

export default MessageExamples