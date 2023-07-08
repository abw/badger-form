import React from 'react'
import Example       from '../../site/Example.jsx'
import TextCode from '../../examples/tutorial/Text.jsx'
import TextSrc  from '../../examples/tutorial/Text.jsx?raw'
import TextAltCode from '../../examples/tutorial/TextAlt.jsx'
import TextAltSrc  from '../../examples/tutorial/TextAlt.jsx?raw'
import TextareaCode from '../../examples/tutorial/Textarea.jsx'
import TextareaSrc  from '../../examples/tutorial/Textarea.jsx?raw'
import SelectCode from '../../examples/tutorial/Select.jsx'
import SelectSrc  from '../../examples/tutorial/Select.jsx?raw'
import RadioCode from '../../examples/tutorial/Radio.jsx'
import RadioSrc  from '../../examples/tutorial/Radio.jsx?raw'
import CheckboxCode from '../../examples/tutorial/Checkbox.jsx'
import CheckboxSrc  from '../../examples/tutorial/Checkbox.jsx?raw'
import Pager from '../../site/Pager/index.jsx'
import { Tutorial } from '../../site/Menus.jsx'

const FieldTypes = () =>
  <div className="prose">
    <h1>Field Types</h1>
    <p>
      All the basic HTML form field input types are supported.
    </p>

    <h2>Text</h2>
    <p>
      The <code>text</code> input type is the default.  You don&apos;t need
      to set the <code>type</code> attribute to <code>text</code> but it
      doesn&apos;t hurt if you do.
    </p>
    <Example
      Component={TextCode}
      code={TextSrc}
      caption="Text Fields"
      expand
    />

    <p>
      The <code>type</code> attribute can also be set to any of the other
      text-based input types: <code>password</code>, <code>number</code>,{' '}
      <code>date</code>, <code>month</code>, <code>week</code>,{' '}
      <code>time</code>, <code>email</code>, <code>tel</code>, <code>url</code>{' '}
      and <code>search</code>.  Other attributes that relate to those types
      can be provided, e.g. <code>min</code> and <code>max</code> for the{' '}
      <code>number</code> type.
    </p>

    <Example
      Component={TextAltCode}
      code={TextAltSrc}
      caption="Number and Date Fields"
      expand
    />

    <h2>Textarea</h2>
    <p>
      Set the <code>type</code> to <code>textarea</code> for a text area
      input.  The <code>rows</code> attribute can be provided to set the
      number of rows.
    </p>
    <Example
      Component={TextareaCode}
      code={TextareaSrc}
      caption="Textarea Fields"
      expand
    />

    <h2>Select</h2>
    <p>
      Set the <code>type</code> to <code>select</code> for a select input.
      The <code>options</code> should be used to provide the options for
      the list.  They can be an array of simple values, as shown in the
      first field in the example below, or an array of objects containing{' '}
      <code>value</code> and <code>text</code> items, as shown in the second.
    </p>
    <Example
      Component={SelectCode}
      code={SelectSrc}
      caption="Select Fields"
      expand
    />

    <h2>Radio Buttons</h2>
    <p>
      Set the <code>type</code> to <code>radio</code> for radio button inputs.
      The <code>options</code> should be used to provide the values for
      each item.  They are the same as for select fields and should be an array
      containing either simple values or objects containing <code>value</code> and{' '}
      <code>text</code> items.
    </p>
    <p>
      You can also set the <code>border</code> option to add a border to each
      item.  You&apos;ll probably want to add some styling to add a margin
      between each option.  You can set the <code>optionClass</code> to
      apply a class to each option as shown in the third field below, where
      we add the <code>mar-r-2</code> class to add 2 units
      (0.5rem) of margin to the right.  Or you can use the{' '}
      <code>optionsClass</code> to apply a class to the options container.
      In the fourth field we set it to <code>grid-2 gap-2</code> to display the
      options in a two column grid with 2 units (0.5rem) gap between them.
    </p>
    <Example
      Component={RadioCode}
      code={RadioSrc}
      caption="Radio Buttons"
      expand
    />

    <h2>Checkbox</h2>
    <p>
      Set the <code>type</code> to <code>checkbox</code> for a checkbox input.
      The <code>text</code> attribute should be used to provide the additional
      text to display alongside it.  You can also define a <code>label</code>{' '}
      if you want to.  Both are optional, but you should probably define at
      least one of them or your poor users won&apos;t know what the checkbox
      is for.
    </p>
    <p>
      The <code>border</code> option can be set to box it with a border.
    </p>
    <Example
      Component={CheckboxCode}
      code={CheckboxSrc}
      caption="Checkbox Fields"
      expand
    />

    <Pager menu={Tutorial}/>
  </div>

export default FieldTypes