import { useRef, useState } from 'react'
import { useTheme } from '@abw/react-night-and-day'
import { Generator } from '@abw/react-context'
import { useResponsive } from './Responsive.jsx'
import { NO_SIDEBAR, SIDEBAR } from './Constants.jsx'
import { MOBILE, TABLET } from '@/utils/breakpoint.js'

const SiteContext = ({ render }) => {
  const { width, breakpoint } = useResponsive()
  const { theme, variant, setVariant } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar       = () => setSidebarOpen(true)
  const closeSidebar      = () => setSidebarOpen(false)
  const toggleSidebarOpen = () => setSidebarOpen( open => ! open )

  const sidebarIconClick = () => {
    if (breakpoint === MOBILE || breakpoint === TABLET) {
      toggleSidebarOpen()
    }
    else if (variant === SIDEBAR) {
      setVariant(NO_SIDEBAR)
      closeSidebar()
    }
    else {
      setVariant(SIDEBAR)
      openSidebar()
    }
  }

  const [tocs, setTocs] = useState({ })
  const contentRef = useRef()
  const addToc = (tocName, key, text, ref) => {
    const toc = tocs[tocName] ||= { }
    toc[key] = { text, ref }
    setTocs({ ...tocs })
  }
  const addTocHeading = (tocName, key, heading, ref) => {
    const toc = tocs[tocName] ||= { }
    toc[key] = { heading, ref }
    setTocs({ ...tocs })
  }
  return render({
    width, breakpoint,
    theme, variant, setVariant,
    sidebarOpen, setSidebarOpen,
    openSidebar, closeSidebar,
    sidebarIconClick,
    tocs,
    addToc,
    addTocHeading,
    contentRef
  })
}

const generated = Generator(SiteContext)
export const {
  Context, Provider, Consumer, Children,
  Use: useSite
} = generated

export default generated
