import React          from 'react'
import Example        from '@/site/Example.jsx'
import TutorialPager  from '@/site/Pager/Tutorial.jsx'
import Split          from '@/site/Split.jsx'
import Suggest        from '@/site/Suggest.jsx'
import EditForm       from './_examples/EditForm.jsx'
import EditFormSrc    from './_examples/EditForm.jsx?raw'
import {
  DebugLink, FormHiddenLink, FormLink, FormValuesLink
} from '@/site/Links.jsx'

const EditFormExample = () =>
  <div className="prose flow">
    <h1>Edit Form</h1>
    <p className="intro wide">
      Another common use case for forms is in editing existing data records.
    </p>

    <h2><FormValuesLink/></h2>
    <Split>
      <p>
        You can pass the <FormValuesLink/> property to a <FormLink/> to
        seed it with initial values for fields.  If there are additional
        hidden values that you want to include when you submit the form then
        you can provide them using the <FormHiddenLink/> property.
      </p>
      <Suggest>
        Try changing some of the values in the form and then
        click on the <b>Reset</b> button.  The fields will
        reset to their original values.
        {/*
        The <DebugLink/> component is
        included in this example so you can see what&apos;s going on
        behind the scenes.  We&apos;ll talk more about that on the next
        page.
        */}
      </Suggest>
    </Split>
    <Example
      Component={EditForm}
      code={EditFormSrc}
      caption="Edit Form"
    >
    </Example>

    <h2>Where Next?</h2>
    <p>
      You&apos;ve seen an example of the <DebugLink/> component in action.
      Now it&apos;s time to talk about debugging in a little more detail.
    </p>

    <TutorialPager uri="edit-form"/>
  </div>

export default EditFormExample