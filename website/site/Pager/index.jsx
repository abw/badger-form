import React from 'react'
import { useLocation } from 'react-router-dom'
import PrevNext from './PrevNext.jsx'

const Pager = ({menu}) => {
  const { pathname } = useLocation()
  console.log(`pathname: `, pathname)
  const index = menu.findIndex(
    item => item.to === pathname
  )
  console.log(`index: `, index)
  if (index < 0) {
    return null
  }
  const prev = index > 0
    ? menu[index - 1]
    : null
  const next = index < menu.length - 1
    ? menu[index + 1]
    : null
  console.log(`prev: `, prev)
  console.log(`next: `, next)
  return <PrevNext prev={prev} next={next}/>
}

export default Pager