//alert("JS is working!");
let player_score = 0;
let computer_score = 0;
let ties = 0;
let round_total = 0;
let game_winner = "";
let win_how_phrase = "";

//array to store computer play options
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
    ties++;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    winner = "Computer";
    computer_score++;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    winner = "Player";
    player_score++;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    winner = "Computer";
    computer_score++;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    winner = "Player";
    player_score++;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    winner = "Player";
    player_score++;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    winner = "Computer";
    computer_score++;
  }
  round_total++;
  return winner;
}

//variable declaration for accessing elements within the DOM
const results = document.querySelector(".results");
const pc = document.getElementById('#pc');
const cc = document.getElementById('#cc');
const whp = document.getElementById('#whp');
const choice_relationship = document.createElement('p');
const p_total = document.getElementById('#player_total');
const c_total = document.getElementById('#computer_total');
const t_total = document.getElementById('#ties');
const player_choices = document.getElementsByClassName("player_choices");
let pc_image = document.getElementById('pc_img');
let cc_image = document.getElementById('cc_img');
let game_prompt = document.getElementById('#game_prompt');
let rr = document.getElementById('#rr');

//loop to add event listener to player choice buttons
for (let i = 0; i < player_choices.length; i++) {
  player_choices[i].addEventListener('click', function(e) {

    let player_choice = e.target.id;
    pc.textContent = "Player: " + player_choice;
    let computer_choice = computerPlay();
    cc.textContent = "Computer: " + computer_choice;

    let outcome = singleRound(player_choice, computer_choice);
    game_prompt.style.display = 'none';
    console.log(outcome);
    console.log(round_total);
    console.log(player_choice);
    console.log(computer_choice);

    if (outcome === "No one") {
      pc_image.setAttribute('src', 'images/w_' + player_choice + '.png');
      cc_image.setAttribute('src', 'images/w_' + computer_choice + '.png');
      win_how_phrase = "" + computer_choice + " ties " + player_choice + "";
    } else if (outcome === "Computer") {
      pc_image.setAttribute('src', 'images/l_' + player_choice + '.png');
      cc_image.setAttribute('src', 'images/w_' + computer_choice + '.png');
      win_how_phrase = "" + computer_choice + " beats " + player_choice + "";
    } else {
      pc_image.setAttribute('src', 'images/w_' + player_choice + '.png');
      cc_image.setAttribute('src', 'images/l_' + computer_choice + '.png');
      win_how_phrase = "" + player_choice + " beats " + computer_choice + "";
    };

    whp.textContent = "" + win_how_phrase + "";
    if (outcome === "No one") {
      rr.textContent = "Tie!";
    } else {
      rr.textContent = "" + outcome + " wins this round!";
    }
    p_total.textContent = "Player's Score : " + player_score + "";
    c_total.textContent = "Computer's Score : " + computer_score + "";
    t_total.textContent = "Ties : " + ties + "";

    if (round_total === 5) {
      console.log("Round total is 5!");
      document.getElementById("Rock").disabled = true;
      document.getElementById("Paper").disabled = true;
      document.getElementById("Scissors").disabled = true;
      if (player_score > computer_score) {
        game_winner = "Player";
      } else if (player_score < computer_score) {
        game_winner = "Computer";
      } else {
        game_winner = null;
      };

      if (game_winner === null) {
        rr.textContent = "The match was a draw!";
        rr.classList.add("blinking");
      } else {
        rr.textContent = "" + game_winner + " wins the game!";
        rr.classList.add("blinking");
      }
    }
  })
}
