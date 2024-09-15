import React       from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const ResetPropertiesLayout = () =>
  <>
    <h1>Reset Properties</h1>
    <Outlet/>
  </>

export default ResetPropertiesLayout