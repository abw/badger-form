export type CSSClassItem = string|undefined|null
export type CSSClassHash = Record<string, unknown>
export type CSSClassProps = Array<CSSClassItem|CSSClassHash>

export type FlexGridProps = {
  gap?: string | number,
  space?: boolean,
  stack?: string,
  className?: string
  [key: string]: unknown
}