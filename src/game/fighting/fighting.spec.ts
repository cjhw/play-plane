import { describe, expect, it } from 'vitest'
import Bullet from '../Bullet/Bullet'
import EnemyPlane from '../EnemyPlane/EnemyPlane'
import { setupPlane } from '../Plane/Plane'
import { fighting } from './fighting'

describe('fighting', () => {
  it('In case of collision, destroy together', () => {
    const bullet = new Bullet()
    bullet.x = 0
    bullet.y = 0
    bullet.width = 100
    bullet.height = 100
    const bullets = [bullet]
    const plane = setupPlane({}, bullets)

    const enemy = new EnemyPlane()
    enemy.x = 50
    enemy.y = 50
    enemy.width = 100
    enemy.height = 100
    const enemyPlanes = [enemy]

    fighting(plane, enemyPlanes)
    expect(bullets.length).toBe(0)
    expect(enemyPlanes.length).toBe(0)
  })
})
