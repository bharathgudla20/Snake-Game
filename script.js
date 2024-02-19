const playb=document.querySelector(".playboard");
snakeX=15;
snakeY=18;
let changeX=0;
let changeY=0;
console.log("bharath");
let count=0;
let points=document.getElementById("points");
const foodGenerator=()=>{
    foodX=Math.floor(Math.random()*27);
    foodY=Math.floor(Math.random()*27);
}
const initgame=()=>{
    let food=`<div class="food" style="grid-area:${foodX}/${foodY}"></div>`;
    snakeX+=changeX;
    snakeY+=changeY;
    let snake=`<div class="snake" style="grid-area:${snakeX}/${snakeY}"></div>`;
    snake=`<div class="snake" style="grid-area:${snakeX}/${snakeY}"></div>`;
    playb.innerHTML=food+snake;
    
    if(snakeX==foodX && snakeY==foodY)
    {
        foodGenerator();
        count+=1;
        points.innerHTML=count;
    }
    if(snakeX>=26 ||snakeX<=0 ||snakeY>=28 ||snakeY<=0)
    {
        console.log("GameOver");
        snakeX=15;
        snakeY=18;

    }
}
const changedir=(e)=>{
    if(e.key==="ArrowDown"){
        changeX=1;
        changeY=0;
    }
    else if(e.key==="ArrowUp"){
        changeX=-1;
        changeY=0;
    }
    else if(e.key==="ArrowLeft"){
        changeX=0;
        changeY=-1;
    }
    else if(e.key==="ArrowRight"){
        changeX=0;
        changeY=1;
    }
    initgame();
}
document.addEventListener("keydown",changedir);
foodGenerator();
setInterval(initgame,125);