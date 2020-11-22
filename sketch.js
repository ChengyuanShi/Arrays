let bubbles = [];
let bgImg;

function preload() {
  bgImg = loadImage('imag/BG.png')

}
function setup() {
  createCanvas(500, 500);
  for(let i = 0; i < 1000;i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,40);
  bubbles[i] = new Aubble(x, y, r);


  }
  
}
// function mouseDragged() {
//   for(let i = bubbles.length-1; i>= 0; i--){
//     if(bubbles[1].contains(mouseX, mouseY)){
//       bubbles.splice(i,1);
//     }
//   }
//
// }

function mouseDragged(){
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(bgImg);
  for(let i = 0; i < bubbles.length;  i++){
  bubbles[i].move();

  bubbles[i].show();

}
    }

  class Bubble{

    constructor(x,y,r){
      this.x = x;
      this.y = y;
      this.r = r;
    }

    move(){
      this.x = this.x + random(-5,5);
      this.y = this.y + random(-5,5);
    }

    show(){


      noStroke();
      fill(225,10,10,20);
      ellipse(this.x, this.y, this.r * 2)
    }
  }

  class Aubble{

    constructor(x,y,r){
      this.x = x;
      this.y = y;
      this.r = r;
    }

    move(){
      this.x = this.x + random(-5,5);
      this.y = this.y + random(-5,5);
    }

    show(){


      noStroke();
      fill(0,20);
      ellipse(this.x, this.y, this.r * 2)
    }
  }
