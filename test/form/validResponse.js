import { it, expect } from 'vitest'
import { defaultValidResponse } from '../../lib/index.js'

// function which returns true/false to indicate if a response is valid or not
it(
  'empty response is invalid',
  () => {
    expect(defaultValidResponse({ })).toBe(false)
  }
)

it(
  'response OK',
  () => {
    expect(defaultValidResponse({ ok: true })).toBe(true)
    expect(defaultValidResponse({ ok: false })).toBe(false)
    expect(defaultValidResponse({ ok: true, status: 300 })).toBe(true)
    expect(defaultValidResponse({ ok: false, status: 200 })).toBe(false)
  }
)

it(
  'response status',
  () => {
    expect(defaultValidResponse({ status: 199 })).toBe(false)
    expect(defaultValidResponse({ status: 200 })).toBe(true)
    expect(defaultValidResponse({ status: 299 })).toBe(true)
    expect(defaultValidResponse({ status: 300 })).toBe(false)
  }
)
