import React       from 'react'
import ErrorsPager from '@/site/Pager/ErrorsPager.jsx'
import { Outlet }  from 'react-router-dom'

const ErrorsPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Errors Properties</h1>
    <Outlet/>
    <ErrorsPager/>
  </div>

export default ErrorsPropertiesLayout