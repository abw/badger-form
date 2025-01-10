import { describe, it, expect } from 'vitest'
import { valueOption } from '@/lib/Utils'

describe(
  'valueOption()',
  () => {
    it(
      'string',
      () => expect(
        valueOption('foo')
      ).toStrictEqual({ value: 'foo', text: 'foo' })
    )
    it(
      'number',
      () => expect(
        valueOption(42)
      ).toStrictEqual({ value: 42, text: 42 })
    )
    it(
      'object',
      () => expect(
        valueOption({ value: 42, text: 'forty-two' })
      ).toStrictEqual({ value: 42, text: 'forty-two' })
    )
  }
)

