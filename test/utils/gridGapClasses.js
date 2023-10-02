import { it, expect } from 'vitest'
import { gridGapClasses } from '../../lib/Utils.js'

it(
  'honours className',
  () => expect(
    gridGapClasses(
      {
        className: 'just-this',
        grid: 10,
        gap: 99,
        other: 'ignored'
      },
      'one',
      'two',
      'three'
    )
  ).toBe('just-this')
)

it(
  'uses grid',
  () => expect(
    gridGapClasses(
      {
        grid: 2,
        gap: 4,
        other: 'ignored'
      },
      'one',
      'two',
      'three'
    )
  ).toBe('grid-2 gap-4 one two three')
)

it(
  'sets grid and gap',
  () => expect(
    gridGapClasses(
      {
        grid: 2,
        gap: 6,
        other: 'ignored'
      },
      'one',
      'two',
      'three'
    )
  ).toBe('grid-2 gap-6 one two three')
)
