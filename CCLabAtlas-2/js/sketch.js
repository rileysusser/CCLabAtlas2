let ang = 0;
let ang2 = 0;
let myBoolean = false;
let amp = 180;
let freq = 2;
let xPos = 0;
let yPos = 0;
let xSpeed = -100;
let ySpeed = [];
let x = [];
let y = [];
let xOff = 0;
let yOff = 0;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
  }
}

function draw() {
  ang++;

  background(40);
  angleMode(DEGREES);
  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      fill(195, 100 + random(-50, 50));
      push();
      textSize(28);
      text("*", x, y);
      text("*", x + 25, y + 25);
      pop();
    }
  }
  strokeWeight(5);

  drawDuck();

  drawFlower();
}

function drawDuck() {
  push();
  if (mouseX > 260 && mouseX < 540 && mouseY > 50 && mouseY < 750) {
    stroke(random(0, 255));
    fill(random(0, 255), random(0, 255), random(0, 255));
  } else {
    stroke("orange");
    fill("orange");
  }
  strokeWeight(6);
  line(mouseX - 20, yPos + 470, mouseX - 20, 490);
  line(mouseX + 15, yPos + 470, mouseX + 15, 490);
  ellipse(mouseX - 17, 490, 15, 10);
  ellipse(mouseX + 18, 490, 15, 10);
  noStroke();
  if (mouseX > 260 && mouseX < 540 && mouseY > 50 && mouseY < 750) {
    stroke(random(0, 255));
    fill(random(0, 255), random(0, 255), random(0, 255));
  } else {
    fill("yellow");
  }
  ellipse(mouseX, yPos + 440, 110, 70);
  ellipse(mouseX + 20, yPos + 395, 70, 63);
  ellipse(mouseX - 12, yPos + 440, 100, 50);
  if (mouseX > 260 && mouseX < 540 && mouseY > 50 && mouseY < 750) {
    stroke(random(0, 255));
    fill(random(0, 255), random(0, 255), random(0, 255));
  } else {
    fill("orange");
  }
  triangle(
    mouseX + 35,
    yPos + 400,
    mouseX + 35,
    yPos + 410,
    mouseX + 48,
    yPos + 405
  );

  fill(245);
  ellipse(mouseX + 35, yPos + 385, 20, 20);
  ellipse(mouseX + 7, yPos + 385, 20, 20);
  fill(0);
  ellipse(mouseX + 35, yPos + 385, 14, 14);
  ellipse(mouseX + 7, yPos + 385, 14, 14);
  fill(245);
  ellipse(mouseX + 37, yPos + 383, 3, 3);
  ellipse(mouseX + 9, yPos + 383, 3, 3);
  if (mouseX > 260 && mouseX < 540 && mouseY > 50 && mouseY < 750) {
    stroke(random(0, 255));
    fill(random(0, 255), random(0, 255), random(0, 255));
  } else {
    fill(255, 239, 0);
  }
  bezier(
    mouseX + 5,
    yPos + 425,
    mouseX + 15,
    yPos + 465,
    mouseX - 65,
    yPos + 440,
    mouseX - 35,
    yPos + 435
  );

  pop();

  if (mouseIsPressed && mouseY < 445) {
    ang2 += 1;
    yPos = height / 2 + cos(ang2 * freq) * amp - 430;
  }
}

function drawFlower() {
  translate(400, 250);
  for (let i = 0; i < 10; i += 10) {
    for (let j = 0; j < 50; j++) {
      rotate(100);
      xOff = map(sin(frameCount * 0.01), -1, 1, -50, 10);
      yOff = map(sin(frameCount * 0.01), -1, 0, -50, 10);
      push();

      translate(100, 0);
      rotate(ang);
      fill(0);
      ellipse(i + xOff, j + yOff, 110, 110);
      for (let i = 0; i < 9; i++) {
        rotate(45);
        fill(random(0, 255), random(0, 255), random(0, 255), 100);

        ellipse(i + xOff, yOff, 60, 40);
        ellipse(25 + i + xOff, yOff, 45, 30);
        //  ang = map(sin(frameCount * 0.1), -1, 1, -50, 50);
        if (mouseIsPressed == true) {
          rotate(ang / 2);
        } else {
          rotate(ang);
        }
      }
      pop();
    }
  }
}