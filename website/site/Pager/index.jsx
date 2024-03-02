import React from 'react'
import { useLocation } from 'react-router-dom'
import PrevNext from './PrevNext.jsx'

const Pager = ({ menu }) => {
  const { pathname } = useLocation()
  const items = menu.items.flatMap(
    item => item.items || item
  )
  const index = items.findIndex(
    item => item.to === pathname
  )
  if (index < 0) {
    return null
  }
  const prev = index > 0
    ? items[index - 1]
    : null
  const next = index < items.length - 1
    ? items[index + 1]
    : null
  return <PrevNext prev={prev} next={next}/>
}

export default Pager