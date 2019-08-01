//alert("JS is working!");

// array to store computer play options
var computerPlays = ["Rock", "Paper", "Scissors"];

//computerPlay randomly returns either Rock, Paper or Scissors
function computerPlay() {
  //random number gets a number: 1,2,3
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChoice = computerPlays[randomNumber];
  return randomChoice;
}

//returns the outcome based on inputs from human and computer players
function singleRound(playerSelection, computerSelection) {
  let winner = "";

  if (playerSelection === computerSelection) {
    winner = "No one";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    winner = "Computer";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    winner = "Player";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    winner = "Computer";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    winner = "Player";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    winner = "Player";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    winner = "Computer";
  }
  return winner;
}


function game(num_of_rounds) {
  for (var i = 0; i < 10; i++) {
    var playerChoice = prompt("Rock, Paper, or Scissors?");
    console.log(singleRound(playerChoice, computerPlay()));
    console.log(i + 1);
  }
}

const results = document.querySelector(".results");
const pc = document.getElementById('#pc');
const cc = document.getElementById('#cc');
const whp = document.getElementById('#whp');
const rr = document.getElementById('#rr');
const choice_relationship = document.createElement('p');

const player_choices = document.getElementsByClassName("player_choices");
let win_how_phrase = "";

for (let i = 0; i < player_choices.length; i++) {
  player_choices[i].addEventListener('click', function(e) {

    let player_choice = e.target.id;
    pc.textContent = "Player Choice: " + player_choice + ".";
    let computer_choice = computerPlay();
    cc.textContent = "Computer Choice: " + computer_choice + ".";

    let outcome = singleRound(player_choice, computer_choice);
    console.log(outcome);

    if (outcome === "No one") {
      win_how_phrase = "" + computer_choice + " ties with " + player_choice +".";
    } else if (outcome === "Computer") {
      win_how_phrase = "" + computer_choice + " beats " + player_choice +".";
    } else {
      win_how_phrase = "" + player_choice + " beats " + computer_choice +".";
    }

    whp.textContent = "" + win_how_phrase + "";
    rr.textContent = "" + outcome + " wins this round!";
  })
}
