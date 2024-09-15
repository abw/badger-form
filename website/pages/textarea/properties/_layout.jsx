import React      from 'react'
import { Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false,
}

const TextareaPropertiesLayout = () =>
  <>
    <h1>Textarea Properties</h1>
    <Outlet/>
  </>

export default TextareaPropertiesLayout