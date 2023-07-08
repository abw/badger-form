import { it, expect } from 'vitest'
import { classes } from '../../lib/Utils.js'

it(
  'joins strings',
  () => expect( classes('foo', null, 'bar') ).toBe('foo bar')
)

it(
  'joins objects',
  () => expect(
    classes({
      foo: true,
      wiz: false,
      bar: true
    })
  ).toBe('foo bar')
)

it(
  'joins strings and objects',
  () => expect(
    classes(
      'checkbox',
      null,
      {
        wide: true,
        border: false,
      }
    )
  ).toBe('checkbox wide')
)
