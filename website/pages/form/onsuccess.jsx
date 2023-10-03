import React       from 'react'
import Example     from '../../site/Example.jsx'
import SuccessCode from '../../examples/form/submit/Success.jsx'
import SuccessSrc  from '../../examples/form/submit/Success.jsx?raw'
import FormPager   from '../../site/Pager/FormPager.jsx'
import { OnSubmitLink } from '../../site/Links.jsx'

const OnSuccessPage = () =>
  <div className="prose">
    <h1>Form</h1>
    <h2 className="font-mono">onSuccess</h2>
    <p>
      The <code>onSuccess</code> property can be used to define a function
      which is called on successful submission of the form.
    </p>
    <p>
      It will be passed the response data returned from the <OnSubmitLink/>{' '}
      handler.
    </p>
    <Example
      Component={SuccessCode}
      code={SuccessSrc}
      caption="onSuccess"
      expand
    />

    <FormPager/>
  </div>

export default OnSuccessPage