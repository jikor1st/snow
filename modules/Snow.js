import { Point } from "./Point.js";

import { getRandomArbitrary } from "../utils/random.js";

const RADIUS = 1.5;
const SPEED = 0.01;

export class Snow {
  /**
   *
   * @param {Point} point
   */
  constructor(point) {
    this.pos = new Point(point.x, point.y);
    this.radius = getRandomArbitrary(0.5, 2);
    this.speed = getRandomArbitrary(0.01, 0.03);
    this.drop = getRandomArbitrary(2.5, 3.5);
  }

  snows() {
    this.pos.y += this.drop;
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
