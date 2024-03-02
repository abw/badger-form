import React      from 'react'
import FieldPager from '@/site/Pager/FieldPager.jsx'
import { Outlet } from 'react-router-dom'

const FieldComponentsLayout = () =>
  <div className="prose flow">
    <h1>Field Components</h1>
    <Outlet/>
    <FieldPager/>
  </div>

export default FieldComponentsLayout