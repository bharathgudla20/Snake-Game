const playb=document.querySelector(".playboard");
snakeX=15;
snakeY=18;
let changeX=0;
let changeY=0;
let snakeBody=[];
let snake;
let count=0;
let points=document.getElementById("points");//for updating the score
const foodGenerator=()=>{
    foodX=Math.floor(Math.random()*26)+1;    //generate food at different grid point
    foodY=Math.floor(Math.random()*27)+1;
}
const initgame=()=>{
    let htmlmar=`<div class="food" style="grid-area:${foodX}/${foodY}"></div>`;
    if(snakeX===foodX && snakeY===foodY)    //condition whether snake ate the food
    {
        foodGenerator();                    //if snake eats ,then generate another food at diff grid
        snakeBody.push([foodX,foodY]);
        count+=1;
        if(count<=3)                        //speed of the snake at different scores
        {
            clearInterval(snakeSpeed);
            snakeSpeed=setInterval(initgame,300);
        }
        else if(count<=6)
        {
            clearInterval(snakeSpeed);
            snakeSpeed=setInterval(initgame,250);
        }
        else if(count<=9)
        {
            clearInterval(snakeSpeed);
            snakeSpeed=setInterval(initgame,200);
        }
        else
        {
            clearInterval(snakeSpeed);
            snakeSpeed=setInterval(initgame,120);
        }
        points.innerHTML=count;                     //updating the score
    }
    for(let i=snakeBody.length-1;i>0;i--)
    {
        snakeBody[i]=snakeBody[i-1];
    }
    snakeBody[0]=[snakeX,snakeY];
    snakeX+=changeX;                                //change the snake direction according to the arrow button pressed
    snakeY+=changeY;
    
    
    for(let i=0;i<snakeBody.length;i++)             //increase the snake body,creating separate div for each body
    {
       htmlmar+=`<div class="snake" style="grid-area:${snakeBody[i][0]}/${snakeBody[i][1]}"></div>`;
       if(i!==0 && snakeBody[0][1]==snakeBody[i][1] && snakeBody[0][0]===snakeBody[i][0]) //game over when snake head hits its body
       {                                                
        alert("Game over,press ok to replay");
        window.location.href="index.html";
       }
    }
    playb.innerHTML=htmlmar;
    if(snakeBody[0][0]>=27 ||snakeBody[0][0]<=0 ||snakeBody[0][1]>28||snakeBody[0][1]<=0)//game over when snake hits the boundary
    {
        console.log("GameOver");
        alert("Game over,press ok to replay");
        window.location.href="index.html";
        snakeX=15;
        snakeY=18;

    }
}
const changedir=(e)=>{                  //changing snake direction according to the arrow button pressed
    if(e.key==="ArrowDown" && changeX!=-1){
        changeX=1;                      //here X,Y denotes the row & col
        changeY=0;
    }
    else if(e.key==="ArrowUp" && changeX!=1){
        changeX=-1;
        changeY=0;
    }
    else if(e.key==="ArrowLeft" && changeY!=1){
        changeX=0;
        changeY=-1;
    }
    else if(e.key==="ArrowRight" &&changeY!=-1){
        changeX=0;
        changeY=1;
    }
    initgame();
}
document.addEventListener("keydown",changedir);
foodGenerator();                      //generate food initially
let snakeSpeed=setInterval(initgame,320); //initial speed of snake

