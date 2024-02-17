import React from 'react'
import Icon from '../ui/Icon.jsx'

const Suggest = ({
  title,
  text,
  children
}) =>
  <div className="info alert border flex start small shadow-2">
    <Icon name="info" className="side-icon"/>
    <div>
      { Boolean(title) &&
        <h3 className="mar-b-2">{title}</h3>
      }
      {text||children}
    </div>
  </div>

export default Suggest