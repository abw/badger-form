import React      from 'react'
import FieldPager from '@/site/Pager/FieldPager.jsx'
import { Outlet } from 'react-router-dom'

const FieldFunctionsLayout = () =>
  <div className="prose flow">
    <h1>Field Functions</h1>
    <Outlet/>
    <FieldPager/>
  </div>

export default FieldFunctionsLayout