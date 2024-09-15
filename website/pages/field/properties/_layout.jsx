import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FieldPropertiesLayout = () =>
  <>
    <h1>Field Properties</h1>
    <Outlet/>
  </>

export default FieldPropertiesLayout