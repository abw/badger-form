import React      from 'react'
import FieldPager from '@/site/Pager/FieldPager.jsx'
import { Outlet } from 'react-router-dom'

const FieldValidationLayout = () =>
  <div className="prose flow">
    <h1>Field Validation</h1>
    <Outlet/>
    <FieldPager/>
  </div>

export default FieldValidationLayout