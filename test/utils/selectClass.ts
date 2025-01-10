import { it, expect } from 'vitest'
import { selectClass } from '@/lib/Utils'

it(
  'should return foo',
  () => expect(selectClass(undefined, 'foo')).toEqual('foo')
)
it(
  'should return bar',
  () => expect(selectClass({ }, 'bar')).toEqual('bar')
)
it(
  'should return wam',
  () => expect(selectClass({ wig: 'wam'}, 'wig')).toEqual('wam')
)

