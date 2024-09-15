import React          from 'react'
import OnLoad         from './_examples/OnLoad.jsx'
import OnLoadSrc      from './_examples/OnLoad.jsx?raw'
import SeeAlso        from '@/site/SeeAlso.jsx'
import TryItOut       from '@/site/TryItOut.jsx'
import { Example, Split } from '@abw/badger-website'
import {
  FieldLink, FieldOnBlurLink, FieldOnChangeLink, FieldOnFocusLink,
  FieldOnInvalidLink, FieldOnValidLink
} from '@/site/Links.jsx'

const OnLoadExamples = () =>
  <>
    <h2 className="font-mono">onLoad</h2>

    <Split>
      <p>
        You can add an <code>onInvalid</code> handler to a <FieldLink/>{' '}
        which will be called when the field is initialised.  This is useful
        if you want to programmatically control the field.
      </p>
      <TryItOut>
        Click on the buttons to programmatically call field methods.
        The first resets the field, the next two set the field value, and
        the last one focusses the field.
      </TryItOut>
    </Split>
    <Example
      Component={OnLoad}
      code={OnLoadSrc}
      caption="onLoad"
    />

    <SeeAlso
      links={[
        FieldOnFocusLink,
        FieldOnBlurLink,
        FieldOnChangeLink,
        FieldOnValidLink,
        FieldOnInvalidLink,
      ]}
    />
  </>

export default OnLoadExamples