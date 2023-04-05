let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
const score = document.querySelector('.score');
const rps = document.querySelectorAll('#rps');
const restart = document.querySelector('.restart');

gameStart();
scoreUpdate();

function computerPlay () {
    computerSelection === Math.floor(Math.random() * (3) + 1);
    if (computerScore === 1) {
        results.textContent = "rock"; 
    } else if (computerScore === 2) {
        results.textContent = "paper"; 
    } else {
        results.textContent = "scissors";
    }  
} 

function rps (playerSelection, computerSelection) {
    playerSelection === playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        ++playerScore;
        scoreUpdate();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        ++playerScore;
        scoreUpdate();
    } else if (playerSelection === "scissors" && computerScore === "paper") {
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        ++playerScore;
        scoreUpdate();
    } else {
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        ++computerScore;
        scoreUpdate();
    }
}


