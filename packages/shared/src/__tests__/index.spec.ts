import { describe, it, expect } from 'vitest'
import { add } from '../index'

describe('add', () => {
  it('should add numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
