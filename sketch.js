let button1, button2;
let img1, img3;
let frame1 = 0, frame3 = 0;
let iframe;

function preload() {
  img1 = loadImage('all.png');
  img3 = loadImage('all3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button1 = createButton('自我介紹');
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mousePressed(showIframe);
  
  button2 = createButton('作品簡介');
  button2.position(280, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mousePressed(showNewIframe);
  
  // 初始化 iframe
  iframe = createElement('iframe');
  iframe.attribute('src', 'https://hoho-p.github.io/20250317/');
  iframe.position(88, 68);
  iframe.size(windowWidth * 0.6, windowHeight * 0.8);
  iframe.hide();
}

function showIframe() {
  iframe.attribute('src', 'https://hoho-p.github.io/20250317/');
  iframe.show();
}

function showNewIframe() {
  iframe.attribute('src', 'https://hoho-p.github.io/250310/');
  iframe.show();
}

function displayAnimation(img, x, y, frameWidth, frameHeight, totalFrames, speed) {
  let frame = floor((frameCount / speed) % totalFrames);
  let sx = frame * frameWidth;
  image(img, x, y, frameWidth, frameHeight, sx, 0, frameWidth, frameHeight);
}

function draw() {
  background(220);
  if (mouseX > 150 && mouseX < 250 && mouseY > 50 && mouseY < 100) {
    // 顯示 all.png 的動畫
    displayAnimation(img1, 50, 50, 235 / 5, 30, 5, 10);
  } else if (mouseX > 280 && mouseX < 380 && mouseY > 50 && mouseY < 100) {
    // 顯示 all3.png 的動畫
    displayAnimation(img3, 50, 50, 160 / 5, 31, 5, 10);
  }
}
