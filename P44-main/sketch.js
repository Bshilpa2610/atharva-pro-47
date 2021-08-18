const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,100,70,70);
    box2 = new Box(701,100,70,70);
    //pig1 = new Pig(810, 350);
  //  log1 = new Smooth(750,100,900,PI/2);
    //log2 = new Smooth(750,100,900,PI/2);

    box3 = new Box(703,100,70,70);
    box4 = new Box(704,100,70,70);
    box5 = new Box(705,100,70,70);
    box6 = new Box(706,100,70,70);
    box7 = new Box(707,100,70,70);
    box8 = new Box(708,100,70,70);
    box9 = new Box(709,100,70,70);
    box10 = new Box(710,100,70,70);
    
    //pig3 = new Pig(810, 220);

    //log3 =  new Smooth(750,100,900, PI/2);

    box5 = new Box(10,160,70,900);
    //log4 = new Smooth(750,240,900, -PI/2);
    //log5 = new Smooth(750,240,900, PI/2);

    bird = new Bird(10,10);

    log6 = new Smooth(400,220,200, PI/2);
    log7 = new Smooth(600,220,200,PI/2);
    log8 = new Smooth(800,220,200,PI/2);
    log9 = new Smooth(1000,220,200,PI/2);
    log10 = new Smooth(1200,220,200,PI/2);
    
    slingshot = new SlingShot(bird.body,{x:100, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
   // log1.display();

    box3.display();
    box4.display();
   // pig3.display();
    //log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    //log2.display();
   // log4.display();
    //log5.display();

    bird.display();
    platform.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}