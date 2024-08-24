import React  from 'react'
import Link   from './Link.jsx'
import Icon  from '@/ui/Icon.jsx'
import Github from '@/svg/github.svg?react'
import Badger from '@/svg/badger-white.svg?react'
import { version } from './Utils.jsx'
import { Toggle, useTheme } from '@abw/react-night-and-day'
import { SIDEBAR, NO_SIDEBAR } from './Constants.jsx'

const Header = () => {
  const { variant, setVariant } = useTheme()
  return (
    <header>
      <nav>
        <div>
          <Icon
            name="bars"
            className="toggle-sidebar action"
            onClick={() => setVariant(variant === SIDEBAR ? NO_SIDEBAR : SIDEBAR)}
          />
          <Link to="/" className="home mar-l-2" text="Badger Form"/>
          <span className="small mar-l-2">v{version}</span>
        </div>
        <div className="flex middle gap-2">
          <a
            href="https://badgerpower.com/"
            target="_blank"
            rel="noreferrer">
            <Badger className="badgerpower"/>
          </a>
          <a
            href="https://github.com/abw/badger-form"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="night-and-day--icon"/>
          </a>
          <Toggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header
