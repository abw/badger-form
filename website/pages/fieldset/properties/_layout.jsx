import React          from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const FieldsetPropertiesLayout = () =>
  <>
    <h1>Fieldset Properties</h1>
    <Outlet/>
  </>

export default FieldsetPropertiesLayout