import { it, expect } from 'vitest'
import { canonicalInputTypeName } from '@/lib/Utils.js'

it(
  'the song remains the same',
  () =>
    expect( canonicalInputTypeName('song') )
      .toBe('song')
)

it(
  'folds case',
  () =>
    expect( canonicalInputTypeName('theSongRemainsTheSame') )
      .toBe('thesongremainsthesame')
)

it(
  'removes hyphens',
  () =>
    expect( canonicalInputTypeName('the-song-remains-the-same') )
      .toBe('thesongremainsthesame')
)

