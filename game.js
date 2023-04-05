let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
const score = document.querySelector('.score');
const choices = document.querySelectorAll('#rps');
const restart = document.querySelector('.restart');

gameStart();
scoreUpdate();

function computerPlay () {
    let choice = Math.floor(Math.random() * (3) + 1);
    if (choice === 1) {
        return "rock"; 
    } else if (choice === 2) {
        return "paper"; 
    } else {
        return "scissors";
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
    } else if (playerSelection === computerScore) {
        results.textContent = `It is a tie!`;
    } else {
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        ++computerScore;
        scoreUpdate();
    }
}

function gameStart () {
    playerScore = 0;
    computerScore = 0;
    choices.forEach(choice => {
        choice.disabled = false
    });
    restart.style.visibility = 'hidden';
    restart.disabled = true;
    results.textContent = "";
    score.textContent = `${playerScore} - ${computerScore}`;
}

function gameEnd () {
    choices.forEach(choice => {
        choice.disabled = true;
    });
    restart.style.visibility = 'visible';
    restart.disabled = false;
}

function scoreUpdate() {
    if (playerScore === 5) {
        score.textContent = "You win!";
        gameEnd(); 
    } else if (computerScore === 5) {
        score.textContent = "You lose!";
        gameEnd();
    } else {
        score.textContent = `${playerScore} - ${computerScore}`;
    }
}

function playRound (playerSelection) {
    let computerSelection = computerPlay();
    rps(playerSelection, computerSelection)
}

choices.forEach(choice => {
    choice.addEventListener (choice => {
        playRound(choice.textContent);
        })
    });

restart.addEventListener('click', gameStart);


