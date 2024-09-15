import React       from 'react'
import Border      from './_examples/Border.jsx'
import BorderSrc   from './_examples/Border.jsx?raw'
import { Example } from '@abw/badger-website'
import { RadioOptionClassLink, RadioOptionsClassLink } from '@/website/site/Links.jsx'

const RadioExample = () =>
  <>
    <h2 className="font-mono">border</h2>
    <p>
      You can set the <code>border</code> property to add a border around
      each option.
      Note that margins aren&apos;t automatically added between each option,
      but you can use the <RadioOptionClassLink/> and/or{' '}
      <RadioOptionsClassLink/> properties to add CSS classes to apply margins.
    </p>
    <Example
      Component={Border}
      code={BorderSrc}
      caption="border"
      undent={2}
      expand
    />
  </>

export default RadioExample
