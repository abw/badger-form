import React       from 'react'
import ResetPager  from '@/site/Pager/ResetPager.jsx'
import { Outlet }  from 'react-router-dom'

const ResetPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Reset Properties</h1>
    <Outlet/>
    <ResetPager/>
  </div>

export default ResetPropertiesLayout