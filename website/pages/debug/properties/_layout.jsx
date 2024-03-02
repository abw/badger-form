import React      from 'react'
import DebugPager from '@/site/Pager/DebugPager.jsx'
import { Outlet } from 'react-router-dom'

const DebugPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Debug Properties</h1>
    <Outlet/>
    <DebugPager/>
  </div>

export default DebugPropertiesLayout