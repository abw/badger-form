import React  from 'react'
import { version, date, years } from './Utils.jsx'

const Footer = () =>
  <footer>
    <div className="flex space">
      <div>
        &copy; Copyright {years} Andy Wardley
      </div>
      <div>
        Version {version} {date}
      </div>
    </div>
  </footer>

export default Footer
