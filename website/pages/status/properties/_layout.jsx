import React       from 'react'
import StatusPager from '@/site/Pager/StatusPager.jsx'
import { Outlet }  from 'react-router-dom'

const StatusPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Status Properties</h1>
    <Outlet/>
    <StatusPager/>
  </div>

export default StatusPropertiesLayout