import { Point } from "./Point.js";
import { Circle } from "./Circle.js";
import { Ellipse } from "./Ellipse.js";
import { Snow } from "./Snow.js";

import { getRandomArbitrary } from "../utils/random.js";

export class Cloud {
  /**
   *
   * @param {number} centerX
   * @param {number} centerY
   * @param {number} stageWidth
   * @param {number} stageHeight
   */
  constructor(stageWidth, stageHeight) {
    this.center = new Point();
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.cloudBoundary = this.stageHeight / 4;
    this.cloudVelo = 0.13;
    this.maxWidth = 300;
    this.width =
      this.stageWidth / 2.5 < this.maxWidth
        ? this.stageWidth / 2.5
        : this.maxWidth;
    this.height = this.width / getRandomArbitrary(3.2, 3.8);
    this.center.x = this.stageWidth / 2;
    this.center.y = this.height;

    /**
     * @type {Ellipse}
     */
    this.cloud = new Ellipse(
      this.width / 2,
      this.height / 2,
      this.center.x,
      this.center.y
    );

    this.cloudItems = [];
    this.cloudItemFreq = 0.45;
    for (let i = 0 * Math.PI; i < 2 * Math.PI; i += this.cloudItemFreq) {
      const minRadius = this.width / 10;
      const randomRadius = getRandomArbitrary(minRadius, minRadius * 1.65);
      const xPos =
        this.cloud.center.x -
        this.cloud.radiusY * Math.sin(i) * Math.sin(0 * Math.PI) +
        this.cloud.radiusX * Math.cos(i) * Math.cos(0 * Math.PI);
      const yPos =
        this.cloud.center.y +
        this.cloud.radiusX * Math.cos(i) * Math.sin(0 * Math.PI) +
        this.cloud.radiusY * Math.sin(i) * Math.cos(0 * Math.PI);

      this.cloudItems.push(new Circle(xPos, yPos, randomRadius));
    }

    this.tempPos = new Point();

    /**
     * @type {Snow[]}
     */
    this.snow = [];
  }

  /**
   *
   * @param {Point} point
   */
  move(point) {
    const vx = (point.x - this.center.x) * this.cloudVelo;
    const vy = (point.y - this.center.y) * this.cloudVelo;
    this.center.add({ x: vx, y: vy });
    if (this.center.y > this.cloudBoundary) {
      const vy = (point.y - this.cloudBoundary) * this.cloudVelo;
      this.center.subtract({ x: 0, y: vy });
    }
    this.cloud.center.set(this.center.clone());

    const ranCloudWidth = getRandomArbitrary(0, this.width);
    const tempPos = this.center.x + ranCloudWidth - this.width / 2;
    this.snow.push(new Snow({ x: tempPos, y: this.center.y }));
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  snowing(ctx) {
    this.snow = this.snow.filter((snow) => {
      return snow.pos.y < this.stageHeight;
    });
    for (let i = 0; i < this.snow.length; i++) {
      const snow = this.snow[i];
      snow.animate(ctx);
    }
  }

  itemsSetting() {
    let count = 0;
    for (let i = 0 * Math.PI; i < 2 * Math.PI; i += this.cloudItemFreq) {
      const x =
        this.cloud.center.x -
        this.cloud.radiusY * Math.sin(i) * Math.sin(0 * Math.PI) +
        this.cloud.radiusX * Math.cos(i) * Math.cos(0 * Math.PI);
      const y =
        this.cloud.center.y +
        this.cloud.radiusX * Math.cos(i) * Math.sin(0 * Math.PI) +
        this.cloud.radiusY * Math.sin(i) * Math.cos(0 * Math.PI);

      this.cloudItems[count].pos.x = x;
      this.cloudItems[count].pos.y = y;

      count++;
    }
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  animate(ctx) {
    this.cloud.animate(ctx);
    this.itemsSetting();
    for (let i = 0; i < this.cloudItems.length; i++) {
      this.cloudItems[i].animate(ctx);
    }
    this.snowing(ctx);
  }
}
