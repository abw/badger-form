import React     from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FormValidationLayout = () =>
  <>
    <h1>Form Validation</h1>
    <Outlet/>
  </>

export default FormValidationLayout