let playerChance=document.getElementById("player-chance");
let button=document.getElementById("button");
let randomNum;
let player1=document.getElementById("player1-score");
let player2=document.getElementById("player2-score");
let player1Score=0;
let player2Score=0;
let count=0;
let i;
let winScore=0;
let winAnnounce=document.getElementById("winner-announce");
let newGame=document.getElementById("new-game");
let diceImage=document.getElementById("dice-image");


button.addEventListener("click",random);
newGame.addEventListener("click",newGamefun);
function random(){
    if(winScore < 25){
        min=1,max=7
        randomNum=Math.floor(Math.random() * (max - min)) + min;
        image2=['roll-dice.gif','1.png','2.png','3.png','4.png','5.png','6.png',]
        image.setAttribute('src','image2/'+image2[randomNum]);
        console.log("random number",randomNum);
        count=count+1;
        console.log("count",count);
        playerSelect=count%2;
        console.log("0 or 1=",playerSelect);
        if(playerSelect==1){
            player1Score=player1Score+randomNum;
            player1.innerText=player1Score;
            playerChance.innerText="Player 2 Chance"
            console.log("player 1 score",player1Score);
            if(player1Score > winScore){
                winScore=player1Score
                console.log("player 1 high score",winScore)
            }
            if(player1Score >= 25){
                winAnnounce.innerText="player 1 win!!"
                console.log("stooooooooooooop");
            
            }
        }
        else if(playerSelect==0){
            player2Score=player2Score+randomNum;
            player2.innerText=player2Score;
            playerChance.innerText="Player 1 Chance"
            console.log(player2);
            if(player2Score > winScore){
                winScore=player2Score
                console.log("player 2 high score",winScore)
            }
            if(player2Score >= 25){
                winAnnounce.innerText="player 2 win!!"
            
            }
        }
      }
      else{
        alert("Press New Game");
      }
    }

    
        function newGamefun(){
            player1Score=0;
            player2Score=0;
            randomNum=0;
            winScore=0;
            count=0;
            playerChance.innerText="Player 1 Chance"
            player1.innerText=player1Score;
            player2.innerText=player2Score;
            image.setAttribute('src','image2/'+image2[0]);
            winAnnounce.innerText="";
        }




