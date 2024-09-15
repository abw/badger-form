import React           from 'react'
import Default         from './_examples/DefaultInput.jsx'
import DefaultSrc      from './_examples/DefaultInput.jsx?raw'
import PictureForm     from './_examples/PictureForm.jsx'
import PictureFormSrc  from './_examples/PictureForm.jsx?raw'
import PictureInputSrc from './_examples/PictureInput.jsx?raw'
import PictureSrc      from './_examples/Picture.jsx?raw'
import AnimalsCSS      from './_examples/animals.css?raw'
import Suggest         from '@/site/Suggest.jsx'
import { Example, Split, Source } from '@abw/badger-website'
import { FieldLayoutLink } from '@/website/site/Links.jsx'

const InputExamples = () =>
  <>
    <h2 className="font-mono">Input</h2>
    <p>
      The <code>Input</code> component is included by the <FieldLayoutLink/>{' '}
      component to render the input for a field.
    </p>
    <p>
      You can define your own content for a field to replace the default{' '}
      <FieldLayoutLink/>, but still use the default <code>Input</code> component
      to render the correct input for the field type.
    </p>
    <Example
      Component={Default}
      code={DefaultSrc}
      caption="Default Input"
      expand
    />

    <h2>Custom Input</h2>
    <p>
      You can define your own component to handle the input for a field
      using the <code>Input</code> field property.
    </p>
    <Split>
      <div>
        <p>
          In this example we define a <code>PictureInput</code> component to
          show some pictures of animals for the user to select an animal guide
          from.  We&apos;re still using the default field layout which provides
          us with the label and validation message.
        </p>
      </div>
      <Suggest>
        Click on an animal to select it. Try submitting
        the form without selecting an animal to see the validation error
        message in effect.
      </Suggest>
    </Split>
    <Example
      Component={PictureForm}
      code={PictureFormSrc}
      caption="Picture Form"
      expand
    />
    <h2>The <code>PictureInput</code> Component</h2>
    <Split>
      <Source
        code={PictureInputSrc}
        caption="PictureInput"
        language="jsx"
        expand
      />
      <div>
        <p>
          Here&apos;s the implementation of the <code>PictureInput</code> component.
        </p>
        <p>
          On line 8 we call <code>useField()</code> to get the current field{' '}
          <code>value</code> and the <code>onChange</code> function to set the
          value.  We iterate over a list of animals on line 11 and render the{' '}
          <code>Picture</code> component for each.  We pass the <code>selected</code>{' '}
          flag on line 16 to indicate if the animal name matches the current{' '}
          <code>value</code>.  We also pass a <code>select</code>{' '}
          function on line 17 which calls the <code>onChange</code> handler to select
          the animal.
        </p>
      </div>
    </Split>

    <h2>The <code>Picture</code> Component</h2>
    <Split>
      <Source
        code={PictureSrc}
        caption="Picture"
        language="jsx"
        expand
      />
      <p>
        Here&apos;s the <code>Picture</code> component.  It simply renders
        a <code>div</code> with an <code>onClick</code> handler to call
        the <code>select</code> function passed as a property.  The{' '}
        <code>animal</code> CSS class is added, along with <code>selected</code>{' '}
        if the animal is currently selected.  Inside the <code>div</code> we
        render a picture of the animal in an <code>img</code> element.
      </p>
    </Split>

    <h2>Additional Styles</h2>
    <Split>
      <Source
        code={AnimalsCSS}
        caption="animals.css"
        language="css"
        expand
      />
      <p>
        For completeness, here&apos;s the additional CSS we&apos;re using to
        apply the styling.
      </p>
    </Split>

    <h2 className="hint">Picture Credits</h2>
    <ul className="credits">
      <li>Badger photo by <a href="https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vincent van Zalinge</a> on <a href="https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
      <li>Gorilla photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
      <li>Kitten photo by <a href="https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergey Semin</a> on <a href="https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    </ul>
  </>

export default InputExamples