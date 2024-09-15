import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const ResetSubmitPropertiesLayout = () =>
  <>
    <h1>ResetSubmit Properties</h1>
    <Outlet/>
  </>

export default ResetSubmitPropertiesLayout
