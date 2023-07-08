import React from 'react'
import Link from '../Link.jsx'

const PrevNext = ({prev, next}) =>
  <div className="flex space">
    <NavLink caption="Previous" item={prev} className="prev"/>
    <NavLink caption="Next"     item={next} className="next"/>
  </div>

const NavLink = ({caption, item, className=''}) =>
  item
    ? <Link to={item.to} className={`prev-next-link ${className}`}>
        <h4>{caption}</h4>
        <div>{item.text}</div>
      </Link>
    : <div></div>

export default PrevNext