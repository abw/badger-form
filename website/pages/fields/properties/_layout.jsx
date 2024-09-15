import React       from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FieldsPropertiesLayout = () =>
  <>
    <h1>Fields Properties</h1>
    <Outlet/>
  </>

export default FieldsPropertiesLayout