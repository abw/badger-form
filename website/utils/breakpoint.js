export const UNKNOWN    = 'unknown'
export const MOBILE     = 'mobile'
export const TABLET     = 'tablet'
export const LAPTOP     = 'laptop'
export const DESKTOP    = 'desktop'
export const WIDESCREEN = 'widescreen'
export const ULTRA      = 'ultra'

export const breakpoints = {
  [UNKNOWN]:    0,
  [MOBILE]:     480,
  [TABLET]:     720,
  [LAPTOP]:     960,
  [DESKTOP]:    1200,
  [WIDESCREEN]: 1440,
}

export const widthBreakpoint = width => {
  const breakpoint = Object.entries(breakpoints)
    .find(
      ([ , bpWidth]) => width <= bpWidth
    )
  return breakpoint
    ? breakpoint[0]
    : ULTRA
}

export const windowWidth = () =>
  typeof window === 'undefined'
    ? false
    : window.innerWidth

export const windowBreakpoint = () =>
  widthBreakpoint(windowWidth())

