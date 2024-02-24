import { it, expect } from 'vitest'
import { flexGapSpaceClasses } from '../../lib/Utils.js'

it(
  'honours className',
  () => expect(
    flexGapSpaceClasses(
      {
        className: 'just-this',
        space: true,
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
  'uses space',
  () => expect(
    flexGapSpaceClasses(
      {
        space: true,
        gap: 99,
        other: 'ignored'
      },
      'one',
      'two',
      'three'
    )
  ).toBe('flex space one two three')
)

it(
  'sets gap',
  () => expect(
    flexGapSpaceClasses(
      {
        gap: 6,
        other: 'ignored'
      },
      'one',
      'two',
      'three'
    )
  ).toBe('flex gap-v-none gap-h-6 one two three')
)
