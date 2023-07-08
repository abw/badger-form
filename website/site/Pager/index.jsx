import React from 'react'
import { useLocation } from 'react-router-dom'
import PrevNext from './PrevNext.jsx'

const Pager = ({menu}) => {
  const { pathname } = useLocation()
  const index = menu.findIndex(
    item => item.to === pathname
  )
  if (index < 0) {
    return null
  }
  const prev = index > 0
    ? menu[index - 1]
    : null
  const next = index < menu.length - 1
    ? menu[index + 1]
    : null
  return <PrevNext prev={prev} next={next}/>
}

export default Pager