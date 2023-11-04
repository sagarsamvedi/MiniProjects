var timmer = 10;
var score = 0;
var random_number;
var value = 0;



function makeBubble(){
    let series = '';
    for(let i = 1; i <= 152; i++){
        value = Math.floor(Math.random()*10);
        series += `<div class="score">${value}</div>`
    }
    document.querySelector('#contentBody').innerHTML = series;
    makeHit();
}


function makeHit(){
    random_number = Math.floor(Math.random()*10);
    document.querySelector('#hitValue').innerText = `${random_number}`
    
}

function scoreIncrease(){
    score += 10;
    document.querySelector('#scoreCount').textContent = `${score}`;
}


function runTimer(){
    var timeInterval = setInterval(function(){
        if (timmer > 0){
            timmer-- ;
            document.querySelector('#timer').textContent = `${timmer}`
        }
        else{
            document.querySelector('#contentBody').innerHTML = `<h1>Game Over</h1>`
            clearInterval(timeInterval);
        }
    },1000)
}


document.querySelector('#contentBody').addEventListener('click',function(details){
    console.log(random_number);
    var clicked_value = Number(details.target.textContent);
    console.log(clicked_value);
    if(clicked_value === random_number){
        console.log('hello');
        scoreIncrease();
        makeBubble();
    }
});

runTimer();
makeBubble();

