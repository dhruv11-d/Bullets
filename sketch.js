var thickness, wall;
var bullet, speed, weight;
var formula;

function setup() {
  createCanvas(1600,400)
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50,200,50,50);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness, height/2);
  bullet.velocityX = speed;
  formula =  (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background(0,0,0);  
  if (bullet.collide(wall)){
    if(formula < 10){
      wall.shapeColor = "green"
    }
    else if(formula > 10){
      wall.shapeColor = "red"
    }
  }
  drawSprites();
}


