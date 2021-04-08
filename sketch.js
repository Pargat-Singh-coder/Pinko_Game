var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,320);
  particle = new Particle(90,75);
  particle1 = new Particle(80,95);
  particle2 = new Particle(120,120);
  particle3 = new Particle(180,175);
  particle4 = new Particle(220,25);
  particle5 = new Particle(280,25);
  particle6 = new Particle(320,25);
  particle7 = new Particle(380,25);
  particle8 = new Particle(420,25);
  particle9 = new Particle(480,25);
  particle10 = new Particle(520,25);
  particle11 = new Particle(580,25);
  particle12 = new Particle(620,25);
  particle13 = new Particle(680,25);
  particle14 = new Particle(540,25);
  particle15 = new Particle(560,25);

  //create division objects
  for (var k = 0; k <=900; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 20; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 5; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  particle.display();
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  particle11.display();
  particle12.display();
  particle13.display();
  particle14.display();
  particle15.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}