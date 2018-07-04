"use strict";

const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// jednostka box
const box = 32;

// grafika

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// audio

let eat = new Audio();

eat.src = "audio/chomp.mp3";


// kobra tworzenie

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// ciastuszka

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// wynik

let score = 0;

//kontrola kobry

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){        
        d = "UP";
    }else if(key == 39 && d != "LEFT"){        
        d = "RIGHT";
    }else if(key == 40 && d != "UP"){                
        d = "DOWN";
    }
}

// kolizja
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// print na ekran

function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "#09a72d" : "#00ff3a";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "#09a72d";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // pozycja glowy stara
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // kierunek
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // Gdy kobra cos zje
    if(snakeX == food.x && snakeY == food.y){
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // nie nszczymy ogona
    }else{
        // usuwamy ogon
        snake.pop();
    }
    
    // dodaj nowa glowe
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // koniec gry
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        location.reload();
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}

//wola funkcje rysuj co 1.5s

let game = setInterval(draw,150);


















