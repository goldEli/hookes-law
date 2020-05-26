import Ball from "./Ball";
import Line from "./Line";

var canvas = document.getElementById("app") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let speed = {
  x: 0,
  y: 0
};

let gravity = 1;
let friction = 0.99;

let mousePos = {
  x: canvas.width / 2,
  y: canvas.height / 2
};

let k = 0.03;

let initLength = 100;

const ball = new Ball();
const line = new Line(initLength);
ball.x = canvas.width / 2 + initLength;
ball.y = canvas.height / 2;

line.x = canvas.width / 2;
line.y = canvas.height / 2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  line.x = mousePos.x;
  line.y = mousePos.y;

  let dx = ball.x - line.x;
  let dy = ball.y - line.y;
  let currentLength = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  let angle = Math.atan2(dy, dx);

  let deltaX = currentLength - initLength;

  const f = -deltaX * k;
  const fx = Math.cos(angle) * f;
  const fy = Math.sin(angle) * f;

  speed.x += fx;
  speed.y += fy;
  speed.y += gravity;
  speed.y *= friction;
  speed.x *= friction;
  ball.x += speed.x;
  ball.y += speed.y;

  dx = ball.x - line.x;
  dy = ball.y - line.y;
  currentLength = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  angle = Math.atan2(dy, dx);

  line.initLength = currentLength;
  line.angle = angle;

  line.render(ctx);

  ball.render(ctx);
  window.requestAnimationFrame(draw);
}

window.addEventListener("mousemove", event => {
  // console.log(event.x)
  mousePos = {
    x: event.pageX - canvas.offsetLeft,
    y: event.pageY - canvas.offsetTop
  };
  // draw();
});

draw();
