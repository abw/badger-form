import React            from 'react'
import ResetSubmitPager from '@/site/Pager/ResetSubmitPager.jsx'
import { Outlet }       from 'react-router-dom'

const ResetSubmitPropertiesLayout = () =>
  <div className="prose flow">
    <h1>ResetSubmit Properties</h1>
    <Outlet/>
    <ResetSubmitPager/>
  </div>

export default ResetSubmitPropertiesLayout