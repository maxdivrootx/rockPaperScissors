function computerPlay(){
    let randomNumber = Math.random()*3;
    let computerSelection = "";
    if(randomNumber == 0){
        computerSelection = "rock";
    }
    else if(randomNumber == 1){
        computerSelection = "paper";
    }
    else{
        computerSelection = "scissors";
    }
    return computerSelection;
}
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log(`You WIn! ${playerSelection} beats ${computerSelection}`);
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log(`You WIn! ${playerSelection} beats ${computerSelection}`);
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log(`You WIn! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        console.log("No one wins! Sedge");
    }
}

function selection(){
let playerSelection = prompt("Rock, Paper or Scissors", "rock").toLowerCase();
return playerSelection;
}


let playerSelection = selection();
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        playerSelection = selection();
        console.log(playRound(playerSelection, computerSelection));
     }
}
console.log(game());
    