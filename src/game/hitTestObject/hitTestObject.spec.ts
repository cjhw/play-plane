import { describe, expect, it } from 'vitest'
import { hitTestObject } from './hitTestObject'

describe('hitTestObject', () => {
  it('if intersect,return true', () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    }

    const rectB = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    }
    const r = hitTestObject(rectA, rectB)
    expect(r).toBe(true)
  })
  it('if not intersect,return false', () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    }

    const rectB = {
      x: 200,
      y: 0,
      width: 100,
      height: 100,
    }
    const r = hitTestObject(rectA, rectB)
    expect(r).toBe(false)
  })
})
