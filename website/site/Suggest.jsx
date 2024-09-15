import React from 'react'
import { Info } from '@abw/badger-react-ui'

const Suggest = ({
  title,
  text,
  children
}) =>
  <Info icon="info" title={title} border>
    {text||children}
  </Info>

export default Suggest