import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({
  to,
  className='',
  exact,
  children,
  text,
  onClick,
  label,
  style,
  // button,
  // ...props
}) =>
  <NavLink
    to={to}
    onClick={onClick}
    end={exact && 'end'}
    className={({ isActive }) => `${className} ${isActive ? 'active' : ''}`}
    aria-label={label}
    style={style}
    // ref={ref}
  >
    {children||text}
  </NavLink>

export default Link
