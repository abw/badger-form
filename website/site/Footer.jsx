import React  from 'react'
import Badger from '@/svg/badger-white.svg?react'
import { version, date, years } from './Utils.jsx'

const Footer = () =>
  <footer>
    <div className="flex space middle gap-2">
      <a
        href="https://badgerpower.com"
        target="_blank"
        rel="noreferrer"
        className="badgerpower"
      >
        <Badger/>
        Badger Powered
      </a>
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
    </div>
  </footer>

export default Footer
