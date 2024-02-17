import { describe, it, expect } from 'vitest'
import { formAttrs, inputAttrs } from '@/lib/Utils.js'

describe(
  'inputAttrs()',
  () => {
    it(
      'inputAttrs()',
      () => expect(inputAttrs({ id: 1, size: 2, color: 'red' }))
        .toStrictEqual({ id: 1, size: 2 })
    )
  }
)

describe(
  'formAttrs()',
  () => {
    it(
      'formAttrs()',
      () => expect(formAttrs({ id: 1, method: 2, color: 'red' }))
        .toStrictEqual({ id: 1, method: 2 })
    )
  }
)
