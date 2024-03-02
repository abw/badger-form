import React      from 'react'
import FieldPager from '@/site/Pager/FieldPager.jsx'
import { Outlet } from 'react-router-dom'

const FieldPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Field Properties</h1>
    <Outlet/>
    <FieldPager/>
  </div>

export default FieldPropertiesLayout