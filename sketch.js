var canvas;
var surface1,surface2,surface3,surface4;
var box;


function preload(){
  
}


function setup(){
    canvas = createCanvas(800,600);

//create 4 different surfaces
 surface1 = createSprite(40,590,280,50);
 surface1.shapeColor= "blue";

 surface2 = createSprite(290,590,200,50);
 surface2.shapeColor= "red";

 surface3 = createSprite(500,590,200,50);
 surface3.shapeColor= "green";

 surface4 = createSprite(750,590,280,50);
 surface4.shapeColor= "yellow";

//create box sprite and give velocity
box = createSprite(random(20,750),300,50,50);
box.shapeColor="white";
box.velocityY = 5;


}

function draw() {
    background(rgb(169,169,169));
   
   bounceOff(box,surface3);
   
    //add condition to check if box touching surface and make it box
    if(isTouching(surface1,box)){
        box.shapeColor="blue";
    }

    if(isTouching(surface2,box)){
        box.shapeColor="red";
    }

    if(isTouching(surface3,box)){
        box.shapeColor="green";
    }

    if(isTouching(surface4,box)){
        box.shapeColor="yellow";
    }



    drawSprites();
}
