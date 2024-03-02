import React     from 'react'
import FormPager from '@/site/Pager/FormPager.jsx'
import { Outlet } from 'react-router-dom'

const FormValidationLayout = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <Outlet/>
    <FormPager/>
  </div>

export default FormValidationLayout