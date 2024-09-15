import React        from 'react'
import ClassName    from './_examples/ClassName.jsx'
import ClassNameSrc from './_examples/ClassName.jsx?raw'
import { Example, Split }  from '@abw/badger-website'
import { ResetGapLink, ResetSizeLink, ResetSpaceLink } from '@/site/Links.jsx'

const ClassNameExamples = () =>
  <>
    <h2 className="font-mono">className</h2>
    <Split>
      <p>
        The <code>className</code> property can be set to define your own
        CSS class for the container.  When this is defined the <ResetGapLink/>{' '}
        <ResetSpaceLink/> and <ResetSizeLink/> properties have no effect.
      </p>
      <p>
        In this example we use <code>flex space</code> to separate the buttons,
        along with <code>pad-2</code> to add some padding.  The{' '}
        <code>bgc-90</code> class sets the background color to <code>grey-90</code>{' '}
        and <code>bgd-10</code> sets it to <code>grey-10</code> when the dark
        theme is selected.  The <code>border</code> class adds a border and{' '}
        <code>bdr-2</code> sets the border radius to 0.5em.  These are
        all utility classes provided
        by <a href="https://abw.github.io/badger-css/">Badger CSS</a>, but it
        works equally well with your own styles or those provided by a different
        CSS toolkit.
      </p>
    </Split>

    <Example
      Component={ClassName}
      code={ClassNameSrc}
      caption="className"
      undent={2}
      expand
    />
  </>

export default ClassNameExamples