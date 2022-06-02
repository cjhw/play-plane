import { describe, expect, it, vi } from 'vitest'
import EnemyPlane, { initEnemyPlanes, runEnemyPlanes } from './EnemyPlane'

describe('EmenyPlane', () => {
  it('move', () => {
    const enemy = new EnemyPlane()
    enemy.y = 0
    enemy.speed = 1
    enemy.move()
    expect(enemy.y).toBe(1)
  })

  it('initEnemyPlanes', () => {
    vi.useFakeTimers()
    const enemyPlanes = []
    initEnemyPlanes(enemyPlanes)

    // 2000毫秒生成一个敌军
    vi.advanceTimersByTime(4000)

    expect(enemyPlanes.length).toBe(2)
  })

  it('let every enemy move', () => {
    const enemy = new EnemyPlane()
    enemy.y = 1
    enemy.speed = 1
    const enemyPlanes = [enemy]
    runEnemyPlanes(enemyPlanes)
    expect(enemy.y).toBe(2)
    expect
  })
})
