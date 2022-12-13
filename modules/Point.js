export class Point {
  /**
   *
   * @param {number | null} x
   * @param {number | null} y
   */
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  /**
   * add point
   * @param {{x:number, y:number} | Point} point
   * @returns {Point}
   */
  add(point) {
    this.x += point.x;
    this.y += point.y;
    return this;
  }

  /**
   * subtract point
   * @param {{x:number, y:number} | Point} point
   * @returns {Point}
   */
  subtract(point) {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  }

  /**
   * set point
   * @param {{x:number, y:number} | Point} point
   * @returns {Point}
   */
  set(point) {
    this.x = point.x;
    this.y = point.y;
    return this;
  }

  /**
   * reduce point
   * @param {number} value
   * @returns {Point}
   */
  reduce(value) {
    this.x *= value;
    this.y *= value;
    return this;
  }

  /**
   *
   * @param {{x:number, y:number} | Point} point
   * @param {number} width
   * @param {number} height
   * @returns {Point}
   */
  collide(point, width, height) {
    if (
      this.x >= point.x &&
      this.x <= point.x + width &&
      this.y >= point.y &&
      this.y <= point.y + height
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @returns {Point}
   */
  clone() {
    return new Point(this.x, this.y);
  }
}
