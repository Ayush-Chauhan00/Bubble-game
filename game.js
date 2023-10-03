var timer=60;
var score=0;
var hit=0;
function makebubble()
{
    var clutter="";
    for(var i=1;i<168;i++)
    {
        var randomnum= Math.floor(Math.random()*10);
       clutter += `<div class="bubble">${randomnum}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
  var timeint=  setInterval(function(){
        if(timer>0)
        {
            timer--;
        }
        else
        {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
        document.querySelector("#timerval").textContent=timer;
    },1000)
}
function getNewHit()
{
     hit= Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent=hit;
}
function incScore()
{
    score += 10;
    document.querySelector("#incscore").textContent=score;
    
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clicked = Number(details.target.textContent);
    if(clicked==hit)
    {
     incScore();
     getNewHit();
     makebubble();
    }
 });
getNewHit();
runTimer();
makebubble();
