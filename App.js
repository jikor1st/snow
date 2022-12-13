import { Cloud } from "./modules/Cloud.js";
import { Point } from "./modules/Point.js";

// https://www.youtube.com/watch?v=kX18GQurDQg
// https://www.youtube.com/watch?v=-wSn49DV9qU
// https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-smooth-canvas-animation
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.mousePos = new Point();
    this.cloudDown = false;

    /** events */
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    window.requestAnimationFrame(this.animate.bind(this));
    document.addEventListener("pointerdown", this.onDown.bind(this), false);
    document.addEventListener("pointermove", this.onMove.bind(this), false);
    document.addEventListener("pointerup", this.onUp.bind(this), false);

    this.notSupport(this.ctx);
  }

  resize() {
    /** canvas settings */
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.cloud = new Cloud(this.stageWidth, this.stageHeight);

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    if (this.isDown) {
      this.cloud.move(this.mousePos.clone());
    }
    this.cloud.animate(this.ctx);
  }

  /**
   * @param {MouseEvent} e
   */
  onDown(e) {
    this.isDown = true;
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;
  }
  onMove(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;

    // if (
    //   this.cloud.center.collide(
    //     {
    //       x: this.cloud.center.x - this.cloud.width / 2,
    //       y: this.cloud.center.y - this.cloud.height / 2,
    //     },
    //     this.cloud.width,
    //     this.cloud.height
    //   )
    // ) {
    //   this.cloudDown = true;
    // }
  }
  onUp(e) {
    this.isDown = false;
    this.cloudDown = false;
  }

  notSupport() {
    // if (typeof import("") === "undefined") {
    //   throw new Error(ERROR_MESSAGE.MODULE);
    // }
    if (!"ellipse" in this.ctx) {
      /** ellipse  */
      throw new Error(ERROR_MESSAGE.ELLIPSE);
    }
  }
}

const ERROR_MESSAGE = {
  MODULE: "MODULE",
  ELLIPSE: "ELLIPSE",
};

window.onload = () => {
  try {
    new App();
  } catch (error) {
    console.error(error);
    switch (error.message) {
      case ERROR_MESSAGE.MODULE:
        alert("모듈을 지원하지 않습니다. 크롬 브라우저를 권장드립니다.");
        break;
      case ERROR_MESSAGE.ELLIPSE:
        alert("타원 그리기를 지원하지 않습니다. 크롬 브라우저를 권장드립니다.");
        break;
      default:
        // alert("알 수 없는 에러가 발생했습니다.");
        break;
    }
  }
};
