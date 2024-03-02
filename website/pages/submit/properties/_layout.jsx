import React       from 'react'
import SubmitPager from '@/site/Pager/SubmitPager.jsx'
import { Outlet }  from 'react-router-dom'

const SubmitPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Submit Properties</h1>
    <Outlet/>
    <SubmitPager/>
  </div>

export default SubmitPropertiesLayout