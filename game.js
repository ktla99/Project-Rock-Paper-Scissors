let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
const score = document.querySelector('.score');
const rps = document.querySelectorAll('#rps');
const restart = document.querySelector('.restart');

gameStart();
scoreUpdate();

function computerPlay () {
    computerScore === Math.floor(Math.random() * (3) + 1);
    if (computerScore === 1) {
        results.textContent = "rock"; 
    } else if (computerScore === 2) {
        results.textContent = "paper"; 
    } else {
        results.textContent = "scissors";
    }
} 