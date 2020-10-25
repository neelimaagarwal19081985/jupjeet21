var bullet,wall;
var speed,weight,thickness;

function setup()
{
createCanvas(1600,800);
speed=random(223,321);;
weight=random(30,52);
thickness=random(22,83);
bullet=createSprite(50, 400, 50, 5);
wall=createSprite(1200, 400, thickness, 400);
bullet.velocityX=speed;
bullet.shapeColor=color(255,255,255);
wall.shapeColor=color(255);
}

function draw()
{
background(0);  

if(isTouching(wall,bullet))
{
bullet.velocityX=0;

var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage<10)
{
wall.shapeColor="green";
}
else if(damage>10 )
{
wall.shapeColor="red";
}
else
{
wall.shapeColor="white";
}
}
drawSprites();

}