const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,340,75,75);
    box2 = new Box(700,340,75,75);
    box3= new Box(500, 280, 75, 75);
    box4= new Box(700, 280, 75, 75);
    box5= new Box(600, 180, 75, 75);
    ground = new Ground(400,height,800,20);
    pig1 = new Pig(600, 340, 50, 50);
    pig2 = new Pig(600, 270, 50, 50);
    log1 = new Log(600, 300, 300, PI/2);
    log2 = new Log(600, 200, 300, PI/2);
    log3 = new Log(550, 100, 150, PI/6);
    log4 = new Log(650, 100, 150, -PI/6);
    bird = new Bird(100, 100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}