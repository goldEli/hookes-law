interface Position {
  x: number;
  y: number;
}

class Line {
  x: number = 0;
  y: number = 0;
  initLength: number = 50;
  angle: number = 0;

  constructor(initLength: number) {
    this.initLength = initLength;
  }

  render(ctx: CanvasRenderingContext2D) {
    // console.log(this);
    ctx.save();
    ctx.strokeStyle = "white";
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.initLength, 0);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
}

export default Line;
