import { Point } from "./Point.js";

export class Circle {
  constructor(x, y, radius) {
    this.pos = new Point(x, y);
    this.radius = radius;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  animate(ctx) {
    ctx.save();
    ctx.beginPath();

    ctx.fillStyle = "#ffffff";
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.restore();
  }
}
