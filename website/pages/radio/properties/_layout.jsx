import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const RadioPropertiesLayout = () =>
  <>
    <h1>Radio Properties</h1>
    <Outlet/>
  </>

export default RadioPropertiesLayout