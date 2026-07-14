let board=document.getElementById("board");
let curmoletile;
let curpiranatree;
let score=0;
let gameend=false;
let start=document.getElementById("start");

start.onclick= function(){
    setGame();
}
function setGame(){
    for(let i =0;i<12;i++){
        let tile =document.createElement("div");
        tile.id=i.toString();
        board.appendChild(tile);
        tile.addEventListener("click",task);
    }
    setInterval(setmole,1000);
    setInterval(setpirana,1000);
    
}

function setmole(){
    if (gameend){
        return ;
    }
    if(curmoletile){
        curmoletile.innerHTML="";
    }
    let mole=document.createElement("img");
    mole.src="monty-mole.png";
    let num=(Math.floor(Math.random()*12));
    if(curpiranatree &&curpiranatree ==num){
        return;
    }

    curmoletile=document.getElementById(num);
    curmoletile.appendChild(mole);


}
function setpirana(){
    if (gameend){
        return;
    }
    if(curpiranatree){
        curpiranatree.innerHTML="";
    }
    
    let pirana=document.createElement("img");
    pirana.src="piranha-plant.png";

    let num=(Math.floor(Math.random()*12));
    if(curmoletile &&curmoletile.id ==num){
        return;
    }
    curpiranatree=document.getElementById(num);
    curpiranatree.appendChild(pirana);

    
}
function task(){
    if (gameend){
        return;
    }
   if(this ==curmoletile){
    
    score +=1;
    document.getElementById("score").innerHTML=score;
}
if (this ==curpiranatree) {
    document.getElementById("score").innerHTML="Game Over Your score is"+score;
    gameend=true;
} 
}