const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2,box3,box4;
var pig1,pig2;
var log1,log2;
var bird;
var backgroundImg;
var platform; 

var box5,log3,log4;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //piramide 1
    box1 =  new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new log(810,260,300,PI/2);
    

    //piramide 2
    box3 =  new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new log(810,180,300,PI/2);

    box5 = new Box(810,160,70,70);
    log3 = new log(760,120,150,PI/7);
    log4 = new log(870,120,150,-PI/7);

    bird = new Bird(100,100);

    ground =  new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    
    

    /*var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();

    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird.display();

    platform.display();
    
    /*rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/
}