import { it, expect } from 'vitest'
import { joinClasses } from '../../lib/Utils.js'

it(
  'should return foo',
  () => expect(joinClasses([undefined, 'foo'])).toEqual('foo')
)
it(
  'should return foo bar',
  () => expect(joinClasses(['foo', null, 'bar'])).toEqual('foo bar')
)

