import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FieldValidationLayout = () =>
  <>
    <h1>Field Validation</h1>
    <Outlet/>
  </>

export default FieldValidationLayout