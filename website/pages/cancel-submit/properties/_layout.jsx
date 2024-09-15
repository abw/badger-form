import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const CancelSubmitPropertiesLayout = () =>
  <>
    <h1>CancelSubmit Properties</h1>
    <Outlet/>
  </>

export default CancelSubmitPropertiesLayout