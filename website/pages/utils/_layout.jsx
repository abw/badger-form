import React      from 'react'
import UtilsPager from '@/site/Pager/UtilsPager.jsx'
import { Outlet } from 'react-router-dom'

const UtilsLayout = () =>
  <div className="prose flow">
    <h1>Utilities</h1>
    <Outlet/>
    <UtilsPager/>
  </div>

export default UtilsLayout