import TSLogo from '@/svg/typescript.svg?react'
import { Section } from '@abw/badger-website'

export const TSNotes = ({ children }) =>
  <div>
    <Section text="Typescript Notes"/>
    <div className="flex gap-4">
      <div className="wide">
        {children}
      </div>
      <TSLogo width="4rem" height="4rem"/>
    </div>
  </div>

export default TSNotes