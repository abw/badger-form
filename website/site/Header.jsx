import React    from 'react'
import Link     from './Link.jsx'
import Icon     from '@/ui/Icon.jsx'
import Context  from './Context.jsx'
import Github   from '@/svg/github.svg?react'
import Badger   from '@/svg/badger-white.svg?react'
import { Toggle } from '@abw/react-night-and-day'
import { version } from './Utils.jsx'

const Header = ({ sidebarIconClick }) =>
  <header>
    <nav>
      <div>
        <Icon
          name="bars"
          className="toggle-sidebar action"
          // onClick={() => setVariant(variant === SIDEBAR ? NO_SIDEBAR : SIDEBAR)}
          onClick={sidebarIconClick}
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

export default Context.Consumer(Header)