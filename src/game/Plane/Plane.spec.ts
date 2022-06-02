import { describe, expect, it } from 'vitest'
import Bullet from '../Bullet/Bullet'
import { Plane, setupPlane } from './Plane'

describe('Plane', () => {
  describe('move', () => {
    const defaultOptions = {
      x: 0,
      y: 0,
      speed: 1,
    }
    it('moveDown', () => {
      const plane = setupPlane({}, [], { ...defaultOptions })
      plane.moveDown()
      expect(plane.y).toBe(1)
    })
    it('moveUp', () => {
      const plane = setupPlane({}, [], { ...defaultOptions })
      plane.moveUp()
      expect(plane.y).toBe(-1)
    })

    it('moveLeft', () => {
      const plane = setupPlane({}, [], { ...defaultOptions })
      plane.moveLeft()
      expect(plane.x).toBe(-1)
    })

    it('moveRight', () => {
      const plane = setupPlane({}, [], { ...defaultOptions })
      plane.moveRight()
      expect(plane.x).toBe(1)
    })
  })
  describe('attack', () => {
    it('attack', () => {
      const bullets: any[] = []
      const plane = setupPlane({}, bullets, {})
      plane.attack()
      expect(plane.bullets.length).toBe(1)
    })
  })

  describe('run', () => {
    it('move all bullets', () => {
      const bullet = new Bullet()
      bullet.y = 0
      const bullets = [bullet]
      const plane = setupPlane({}, bullets)
      plane.run()
      expect(bullets[0].y).not.toBe(0)
    })
    it('bullet exteed', () => {
      const bullets = []
      const plane = setupPlane({}, bullets, { x: 0, y: 0 })
      plane.attack()
      plane.run()
      expect(bullets.length).toBe(0)
    })
  })
})
