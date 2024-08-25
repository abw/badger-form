import { useState, useEffect } from 'react'
import { widthBreakpoint, windowWidth } from '@/utils/breakpoint.js'

export const useResponsive = () => {
  const [width, setWidth] = useState(false)
  const [breakpoint, setBreakpoint] = useState(false)

  const getWidthAndBreakpoint = () => {
    const ww = windowWidth()
    setWidth(ww)
    const bp = widthBreakpoint(ww)
    setBreakpoint(bp)
  }

  useEffect(
    () => {
      getWidthAndBreakpoint()
      // console.log(`adding resize handler`)
      window.addEventListener('resize', getWidthAndBreakpoint)
      return () => {
        // console.log(`removing resize handler`)
        window.removeEventListener('resize', getWidthAndBreakpoint)
      }
    },
    [ ]
  )

  return { width, breakpoint }
}

export default useResponsive