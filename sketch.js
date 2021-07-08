var ball;
var database;
var position1;

function setup()
{

 createCanvas(500,500);

 gameBall = createSprite(250,250,10,10);
 gameBall.shapeColor = "red";

 var database = firebase.database()
 var ballPosition =database.ref('ball/position') //reference

 ballPosition.on("values",readposition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data)
{
position1=data.val()
gameBall.x=position.x;
gameball.y=position.y;




console.log(position1);


}

function showError()
{
    console.log("error happend");
}

function writePosition(x,y)
{
database.ref('ball\position').set({
   'x':position.x+x,
   'y':position.y+y,

  })

}






























