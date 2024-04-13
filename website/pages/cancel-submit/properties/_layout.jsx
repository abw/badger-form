import React            from 'react'
import CancelSubmitPager from '@/site/Pager/CancelSubmitPager.jsx'
import { Outlet }       from 'react-router-dom'

const CancelSubmitPropertiesLayout = () =>
  <div className="prose flow">
    <h1>CancelSubmit Properties</h1>
    <Outlet/>
    <CancelSubmitPager/>
  </div>

export default CancelSubmitPropertiesLayout