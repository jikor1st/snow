import { Point } from "./Point.js";

import { getRandomArbitrary } from "../utils/random.js";

export class Snow {
  /**
   *
   * @param {Point} point
   */
  constructor(point) {
    this.pos = new Point(point.x, point.y);
    this.radius = getRandomArbitrary(1.5, 4);
    this.speed = getRandomArbitrary(5, 15);

    this.frame = 0;
    this.direction = 0;

    this.isStack = false;
  }

  snows() {
    if (!this.isStack) {
      if (this.frame === 60) {
        this.direction = getRandomArbitrary(-0.18, 0.18);
        this.frame = 0;
      }
      this.pos.x += this.direction;
      this.pos.y += this.speed;

      ++this.frame;
    }
  }
  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  animate(ctx) {
    this.snows();

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }
}
