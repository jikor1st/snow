import { Point } from "./Point.js";
/**
 * reference : http://www.scienceprimer.com/draw-oval-html5-canvas
 */
export class Ellipse {
  constructor(radiusX, radiusY, centerX, centerY) {
    this.radiusX = radiusX;
    this.radiusY = radiusY;

    this.center = new Point(centerX, centerY);
  }
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  animate(ctx) {
    ctx.save();
    ctx.beginPath();

    ctx.ellipse(
      this.center.x,
      this.center.y,
      this.radiusX,
      this.radiusY,
      0,
      0,
      2 * Math.PI
    );

    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
