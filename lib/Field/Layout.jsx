import React from 'react'
import { Consumer } from './Context.jsx'

const Layout = ({
  id, label, message,
  inputAttrs,
  fieldClass
}) =>
  <div className={fieldClass}>
    { label &&
      <label htmlFor={id}>{label}</label>
    }
    <input {...inputAttrs}/>
    { Boolean(message)
      && <div className="help">{message}</div>
    }
  </div>

export default Consumer(Layout)