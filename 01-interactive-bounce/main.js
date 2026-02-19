let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let x = 300;
let y = 300;

//2. Add variables (size, speed, colorVal) for controlling the sketch
let size = 50;
let colorVal = "#f00000";
let speed = 10;

let speedX = Math.random(0, 20);
let speedY = Math.random(0, 20) / 2;
let directionY = 1;
let directionX = 1;

function setup() {
  //Creating a canvas to draw on, using the existing canvas element.
  createCanvas(600, 600, canvasElement);
  noStroke();
}

function draw() {
  background(220);

  // 3.1 Animate position
  x += speedX * directionX;
  y += speedY * directionY;
  // 3.2 Bounce logic: check the edges
  if (x > width - size / 2 || x < size / 2) {
    directionX = directionX * -1;
  }

  if (y > height - size / 2 || y < size / 2) {
    directionY = directionY * -1;
  }
  // 3.3 Draw
  fill(colorVal);
  circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements
let sizeInput = document.querySelector("#size-input");
let speedInput = document.querySelector("#speed-input");
let colorInput = document.querySelector("#color-input");

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging
sizeInput.addEventListener("input", function () {
  size = Number(sizeInput.value);
});

speedInput.addEventListener("input", function () {
  speedX = Number(speedInput.value);
  speedY = Number(speedInput.value) / 2;
});

colorInput.addEventListener("input", function () {
  colorVal = colorInput.value;
});
