const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var plinko,ground;
var division,division2,division3;
var division4,division5,division6;
var division7,particles;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  plinko = new Plinko(250,250,10);
  ground = new Ground(240,750,480,10);
  division = new Division(5,600,10,290);
  division2 = new Division(80,600,10,290);
  division3 = new Division(155,600,10,290);
  division4 = new Division(240,600,10,290);
  division5 = new Division(325,600,10,290);
  division6 = new Division(400,600,10,290);
  division7 = new Division(475,600,10,290);


  Engine.run(engine);
}

function draw() {
  background(0);  
  plinko.display();
  ground.display();
  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
}