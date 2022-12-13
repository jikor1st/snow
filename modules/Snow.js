import { Point } from "./Point.js";

import { getRandomArbitrary } from "../utils/random.js";

export class Snow {
  /**
   *
   * @param {Point} point
   */
  constructor(point) {
    this.pos = new Point(point.x, point.y);
    this.radius = getRandomArbitrary(1.5, 3);
    this.drop = getRandomArbitrary(1.5, 3);

    this.diff = 4;

    this.frame = 0;
    this.direction = 0;
  }

  snows() {
    if (this.frame === 32) {
      this.direction = getRandomArbitrary(-0.18, 0.18);
      this.frame = 0;
    }
    this.pos.x += this.direction;
    this.pos.y += this.drop;

    ++this.frame;
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
