import React           from 'react'
import Default         from './_examples/DefaultLayout.jsx'
import DefaultSrc      from './_examples/DefaultLayout.jsx?raw'
import Explicit        from './_examples/ExplicitLayout.jsx'
import ExplicitSrc     from './_examples/ExplicitLayout.jsx?raw'
import PizzaForm       from './_examples/PizzaForm.jsx'
import PizzaFormSrc    from './_examples/PizzaForm.jsx?raw'
import ToppingsSrc     from './_examples/Toppings.jsx?raw'
import UtilsSrc        from './_examples/Utils.js?raw'
import OptionsSrc      from './_examples/Options.jsx?raw'
import OptionSrc       from './_examples/Option.jsx?raw'
import SummarySrc      from './_examples/Summary.jsx?raw'
import PizzaCSS        from './_examples/pizza.scss?raw'
import Example         from '@/site/Example.jsx'
import CodeBlock       from '@/site/CodeBlock.jsx'
import Split           from '@/site/Split.jsx'
import TryItOut        from '@/site/TryItOut.jsx'
import { prepareCode } from '@/site/CodeBlock.jsx'
import { FieldLink, FieldInputLink, FieldLabelLink, FieldMessageLink }   from '@/site/Links.jsx'

const CustomLayout = () =>
  <div className="prose flow">
    <h1>Field Components</h1>
    <h2 className="font-mono">Layout</h2>
    <p>
      The <code>Layout</code> component is inserted as the default content for
      a <FieldLink/> that doesn&apos;t have it&apos;s own content.
    </p>
    <p>
      The two fields in the example below both generate the same output.
      The first implicitly uses the <code>Layout</code> for its content, the
      second includes it explicitly.
    </p>
    <Example
      Component={Default}
      code={DefaultSrc}
      caption="Default Layout"
      expand
    />
    <Split>
      <p>
        The <code>Layout</code> component creates a <code>div</code> containing
        the <FieldLabelLink/>, <FieldInputLink/> and <FieldMessageLink/> components.
        The <code>div</code> will have the <code>field</code> CSS class and
        possibly other classes based on the state of the field (e.g.{' '}
        <code>valid</code>, <code>invalid</code>, etc.)  The{' '}
        <code>fieldClass()</code> utility function can be used to automatically
        return the correct CSS classes for the field.
      </p>
      <div>
        <p>
          The example below shows how you can roll your own layout that does
          the same thing as the default <code>Layout</code> component.
        </p>
        <TryItOut>
          Try submitting the form without entering any value in the required
          field.  You should see that the <code>invalid</code> CSS class is
          added to the field container.
        </TryItOut>
      </div>

    </Split>
    <Example
      Component={Explicit}
      code={ExplicitSrc}
      caption="Explicit Layout"
      expand
    />

    <h2>Custom Layout</h2>
    <p>
      You can define your own component to handle the layout for a field
      using the <code>Layout</code> field property.
    </p>
    <Split>
      <p>
        In this example we define a <code>Toppings</code> layout component
        to render a field allowing a user to select some toppings for a pizza.
      </p>
      <TryItOut>
        Before we go any further into the code, let&apos;s see how it looks.
        Select some toppings for your pizza!
      </TryItOut>
    </Split>
    <Example
      Component={PizzaForm}
      code={PizzaFormSrc}
      caption="Pizza Form"
      expand
    />
    <Split>
      <p>
        We&apos;re defining the schema for the <code>fields</code> externally
        (lines 6 to 25) and passing them into the <code>Form</code> as the{' '}
        <code>fields</code> property (line 28).
        In addition to setting the <code>Layout</code> component on line 8,
        we&apos;re also defining some extra data that the field will require:
        the number of <code>free</code> toppings (line 11), the{' '}
        <code>price</code> of additional toppings after that (line 12), and a
        list of available <code>toppings</code> (lines 13 to 23).  This is the
        kind of data that we want defined up front and not buried in the form markup.
      </p>
    </Split>

    <h2>The <code>Toppings</code> Component</h2>
    <p>
      Here&apos;s the implementation of the <code>Toppings</code> component.
    </p>
    <Split>
      <CodeBlock
        code={prepareCode(ToppingsSrc)}
        caption="Toppings"
        expand
      />
      <div>
        <p>
          On line 8 we call <code>useField()</code> to get the current field{' '}
          context.  As well as the <code>id</code>, <code>value</code> and{' '}
          <code>onChange</code> function to set the value, we&apos;re also getting
          our additional data fields: <code>free</code>, <code>price</code> and{' '}
          <code>toppings</code>.
        </p>
        <p>
          We&apos;ve got two utility functions that we&apos;re importing from
          our <code>Utils.js</code> file.  On line 9 we call{' '}
          <code>selectedToppings()</code> to convert the array of toppings in{' '}
          <code>value</code> into an object so we can easily tell which toppings
          are selected (each selected topping will be set <code>true</code>).
          On line 10 we call the <code>toppingSelector()</code> factory function
          which returns a function for selecting a topping (or unselecting one
          that&apos;s already selected) and calling the <code>onChange</code> handler
          to update the field.  We&apos;ll look at the definitions of those functions
          shortly.
        </p>
        <p>
          We have some explanatory text from lines 14 to 20.  Note how this
          includes the <code>free</code> and <code>price</code> values defined
          in our field schema. On line 21 we render the default <FieldLabelLink/>{' '}
          component to generate the field label. On line 23 we render a custom{' '}
          <code>Options</code> component and on line 27 a custom{' '}
          <code>Summary</code> component.
        </p>
      </div>
    </Split>

    <h2>Utility Functions</h2>
    <p>
      Here&apos;s the definitions for those utility functions.
    </p>
    <CodeBlock
      code={prepareCode(UtilsSrc)}
      caption="Utils.js"
      expand
    />

    <h2>The <code>Options</code> Component</h2>
    <p>
      The <code>Options</code> component iterates over the available toppings
      and renders the <code>Option</code> component for each.  It passes a
      custom <code>id</code>, <code>selected</code> flag and{' '}
      <code>select</code> function tailored to each option.
    </p>
    <CodeBlock
      code={prepareCode(OptionsSrc)}
      caption="Options.jsx"
      expand
    />

    <h2>The <code>Option</code> Component</h2>
    <p>
      The <code>Option</code> component simply renders a checkbox in a label
      using those properties.
    </p>
    <CodeBlock
      code={prepareCode(OptionSrc)}
      caption="Option.jsx"
      expand
    />

    <h2>The <code>Summary</code> Component</h2>
    <p>
      The <code>Summary</code> component displays a summary of the selected
      toppings.
    </p>
    <CodeBlock
      code={prepareCode(SummarySrc)}
      caption="Summary.jsx"
      expand
    />

    <h2>Additional Styles</h2>
    <p>
      And finally, here&apos;s the additional SCSS we&apos;re using to
      apply the styling.
    </p>
    <CodeBlock
      code={PizzaCSS}
      caption="pizza.scss"
      language="css"
      expand
    />

  </div>

export default CustomLayout