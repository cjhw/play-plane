import Bullet from '../Bullet/Bullet'

export interface Plane {
  x: number
  y: number
  width: number
  height: number
  bullets: Bullet[]
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
  attack: () => void
  run: () => void
}

const defaultOptions = {
  x: 300,
  y: 600,
  width: 100,
  height: 60,
  speed: 15,
}

export function setupPlane(plane, bullets: Bullet[] = [], options?): Plane {
  plane.bullets = bullets

  Object.assign(plane, defaultOptions, options)

  initAttack(plane, bullets)
  initRun(plane, bullets)
  initMove(plane)
  return plane
}

function initAttack(plane, bullets) {
  plane.attack = () => {
    const bullet = new Bullet()
    bullet.x = plane.x
    bullet.y = plane.y
    bullet.border = 100
    bullet.onDestroy = () => {
      const index = bullets.indexOf(bullet)
      bullets.splice(index, 1)
    }
    bullets.push(bullet)
  }
}

function initRun(plane, bullets) {
  plane.run = () => {
    bullets.forEach((bullet) => {
      bullet.move()
    })
  }
}

function initMove(plane) {
  plane.moveDown = function moveDown() {
    plane.y += plane.speed
  }

  plane.moveUp = function moveUp() {
    plane.y -= plane.speed
  }

  plane.moveLeft = function moveLeft() {
    plane.x -= plane.speed
  }

  plane.moveRight = function moveRight() {
    plane.x += plane.speed
  }
}
