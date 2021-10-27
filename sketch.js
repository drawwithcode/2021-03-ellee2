let angle = 0;
let canvas;
let amplitude;
let vol;
let music;
let logo;
let text1;
let bgTexture;


function preload() {
  track1 = loadSound("assets/lovebtch.mp3");
  logo = loadImage("assets/logo.png");
  text1 = loadImage("assets/lovebtch1.png");
  bgTexture = loadImage("assets/room.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.mouseClicked(musicController);
  amplitude = new p5.Amplitude();
  logo.filter("invert");


}

function draw() {
  background("black");
  vol = amplitude.getLevel();
  backgroundShape();


push();
  translate(0,-300,-130);
  texture(logo);
  noStroke();
  plane(200, 200);
  pop();

  //1
  push()
  translate(0, -30);
  rotateX(sin(angle));
  rotateY(sin(angle));
  rotateZ(sin(angle));
  fill("blue");
  torus(40 + vol * 80, 5, 64, 64);
  rotateY(angle);
  rotateZ(angle);
  normalMaterial();
  torus(20, 5, 6);
  pop()

  //2
  push()
  translate(-100, 80);
  rotateX(cos(angle));
  rotateY(cos(angle));
  rotateZ(cos(angle));
  normalMaterial();
  torus(40 + vol * 200, 8, 6);
  rotateY(angle);
  rotateZ(angle);
  fill("blue");
  torus(20, 3, 20, 20);
  pop()

  //3
  push()
  translate(100, 80);
  rotateX(sin(angle));
  rotateY(sin(angle));
  rotateZ(sin(angle));
  normalMaterial();
  torus(40 + vol * 200, 8, 6);
  rotateY(-angle);
  rotateZ(-angle);
  fill("blue");
  torus(20, 3, 20, 20);
  pop()


  push();
  translate(0, 375,-130);
  texture(text1);
  noStroke();
  plane(243.5, 38);
  pop();

  


  angle += 0.003

}

function musicController() {
  if (track1.isPlaying()) {
    track1.stop();
  } else {
    track1.play()
  }
}

function backgroundShape(){
  push();
  translate(0,0,-130);
  noStroke();
  texture(bgTexture);
  plane(windowWidth*1.5, windowHeight*1.5);
  pop();
}