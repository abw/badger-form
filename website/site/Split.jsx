import React from 'react'

const Split = ({children, align='start'}) =>
  <div className={`grid-2 gap-h-8 stack-desktop ${align}`}>
    {children}
  </div>

export default Split
