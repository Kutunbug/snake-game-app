const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;

let xVelocity=0;
let yVelocity=0;


// gameloop
function drawGame(){
    console.log('draw game')
    clearScreen();
    drawSnake();
    changeSnakePosition();
    setTimeout(drawGame, 1000/ speed);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height)
}

function drawSnake(){
    ctx.fillStyle = 'orange'
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
} 

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event){
    // up
    if(event.keyCode == 38){
        yVelocity = -1;
        xVelocity = 0;
    }

    //down
    if(event.keyCode == 40){
        yVelocity = 1;
        xVelocity = 0;
    }

    //left
    if(event.keyCode == 37){
        yVelocity = 0;
        xVelocity = -1;
    }

    //right
    if(event.keyCode == 39){
        yVelocity = 0;
        xVelocity = 1;
    }
}
drawGame();