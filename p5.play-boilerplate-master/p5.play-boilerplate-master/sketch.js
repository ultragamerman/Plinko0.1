
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var divisionH = 300

//chips = particles
//knobs = plinko
//divisions = barrier

var chips = [];
var knobs = [];
var divisions = [];

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  for(var k = 0 ; k <= width ; k = k + 80){
    divisions.push(new barrier(k,height-divisionH/2,10,divisionH));
  }

  for(var j = 40 ; j <= width ; j = j + 50){
    knobs.push(new plinko(j,75));
  }

  for(var j = 15 ; j <= width - 10 ; j = j + 50){
    knobs.push(new plinko(j,175));
  }

  for(var j = 40 ; j <= width ; j = j + 50){
    knobs.push(new plinko(j,275));
  }

  for(var j = 15 ; j <= width - 10 ; j = j + 50){
    knobs.push(new plinko(j,375));
  }

  if(frameCount % 60 === 0){
    chips.push(new particle(random(width/2-10,width,2+10),10,10));
  }

  platform = new ground(400,790,800,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  for(var j = 0 ; j < chips.length ; j++){
    chips[j].display();
  }

  for(var k = 0 ; k < knobs.length ; k++){
    knobs[k].display();
  }

  if(frameCount>60){
    for(var l = 0 ; l < chips.length ; l++){
      divisions[l].display();
    }
  }
  platform.display();
}
