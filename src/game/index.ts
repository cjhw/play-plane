import { Application } from 'pixi.js'
import Bullet from './Bullet/Bullet'
import EnemyPlane, {
  initEnemyPlanes,
  runEnemyPlanes,
} from './EnemyPlane/EnemyPlane'
import { fighting, fightingtwo } from './fighting/fighting'
import { Plane, setupPlane } from './Plane/Plane'

export const game = new Application({
  width: 800,
  height: 800,
})

document.body.append(game.view)

export function initGame(_plane, bullets: Bullet[], enemyPlanes: EnemyPlane[]) {
  const plane = setupPlane(_plane, bullets, {})

  initEnemyPlanes(enemyPlanes)

  mainTicker(plane, enemyPlanes)
  return {
    plane,
    bullets,
    enemyPlanes,
  }
}

function mainTicker(plane: Plane, enemyPlanes: EnemyPlane[]) {
  game.ticker.add(() => {
    plane.run()
    runEnemyPlanes(enemyPlanes)
    fighting(plane, enemyPlanes)
    fightingtwo(plane, enemyPlanes)
  })
}
