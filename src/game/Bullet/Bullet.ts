export default class Bullet {
  public x: number = 0
  public y: number = 0
  public width: number = 0
  public height: number = 0
  public speed: number = 15
  public border: number = 0
  onDestroy: any
  constructor() {}

  public move() {
    this.y -= this.speed
    if (this.y <= this.border) {
      this.onDestroy && this.onDestroy()
    }
  }
}
