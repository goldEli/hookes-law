interface Pos {
  x: number;
  y: number;
}

class Ball {
  radius: number = 12;
  x: number = 0;
  y: number = 0;
  // constructor() {
  //   this.radius = 12;
  // }
  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}

export default Ball;
