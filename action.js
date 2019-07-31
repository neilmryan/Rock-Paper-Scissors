alert("JS is working!");

var computerPlays = ["rock", "paper", "scissors"];

//computerPlay randomly returns either Rock, Paper or Scissors
function computerPlay() {
    
    //random number gets a number: 1,2,3
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChoice = computerPlays[randomNumber];
    //console.log(randomNumber);
    //console.log(randomChoice);
    return randomChoice;
}

//returns the outcome based on inputs from human and computer players
function singleRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else {
          switch(playerSelection) {
          case "rock":
            if (computerSelection === "paper") {
              return "You Lose!, Paper beats Rock.";
            } else {
              return "You Win! Rock beats Scissors.";
            }
          //break;
          case "paper":
            if (computerSelection === "scissors") {
              return "You Lose!, Scissors beats Paper."
            } else {
              return "You Win! Paper beats Rock."
            }
          //break;
          case "scissors":
            if (computerSelection === "rock") {
              return "You Lose!, Rock beats Scissors."
            } else {
              return "You Win! Scissors beats Paper."
            }
          //break;
          default:
            console.log("Invalid input.");
    }
  }
}

function game() {
  for (var i = 0; i < 10; i++) {
  var playerChoice = prompt("Rock, Paper, or Scissors?");  
  console.log(singleRound(playerChoice, computerPlay()));
  console.log(i + 1);
  }
}