import React  from 'react'
import Badger from '@/svg/badger-white.svg?react'
import { version, date, years } from './Utils.jsx'

const Footer = () =>
  <footer>
    <nav className="flex space middle gap-4 stack-tablet">
      <div>
        <a
          href="https://badgerpower.com"
          target="_blank"
          rel="noreferrer"
          className="badgerpower"
        >
          <Badger/>
          Badger Powered
        </a>
      </div>
      <div>
        &copy; Copyright {years} {' '}
        <a
          href="https://github.com/abw"
          target="_blank"
          rel="noreferrer">Andy Wardley</a>
      </div>
      <div>
        v{version} - {date}
      </div>
    </nav>
  </footer>

export default Footer
