import TSLogo from '@/svg/typescript.svg?react'
import { Section } from '@abw/badger-website'

export const TSNotes = ({
  children,
  title="Typescript Notes"
}) =>
  <div>
    <Section text={title}/>
    <div className="flex gap-4">
      <div className="wide">
        {children}
      </div>
      <TSLogo width="4rem" height="4rem"/>
    </div>
  </div>

export default TSNotes