import React      from 'react'
import SuffixSrc  from './_examples/Suffix.jsx?raw'
import Suffix     from './_examples/Suffix.jsx'
import BothSrc    from './_examples/Both.jsx?raw'
import Both       from './_examples/Both.jsx'
import Example    from '@/site/Example.jsx'
import SeeAlso    from '@/site/SeeAlso.jsx'
import { FieldPrefixLink } from '@/website/site/Links.jsx'

const SuffixExample = () =>
  <>
    <h2 className="font-mono">suffix</h2>
    <p>
      The <code>suffix</code> property can be used to a a suffix to a field.
      This can be text, an SVG icon or other JSX fragment.
    </p>

    <Example
      Component={Suffix}
      code={SuffixSrc}
      caption="suffix" expand
    />

    <p>
      The <code>suffixClass</code> property can be used to set a CSS class
      for the suffix.  Badger CSS provides two built in styles: {' '}
      <code>lined</code> to add a dividing line, and <code>shaded</code> to
      add some background shading.
    </p>
    <Example
      Component={Both}
      code={BothSrc}
      caption="prefix and suffix"
      expand
    />
    <SeeAlso
      links={[
        FieldPrefixLink
      ]}
    />
  </>


export default SuffixExample