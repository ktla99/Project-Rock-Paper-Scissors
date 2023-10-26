let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
const score = document.querySelector('.score');
const choices = document.querySelectorAll('#rps');
const restart = document.querySelector('#restart');

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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = `Wise choice! Your ${playerSelection} demolished ${computerSelection}!`;
        ++playerScore;
        scoreUpdate();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = `Quite a strategic decision! The thin ${playerSelection} sliced through the ${computerSelection}!`;
        ++playerScore;
        scoreUpdate();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = `A clean cut! Your choice of ${playerSelection} slit the ${computerSelection}!`;
        ++playerScore;
        scoreUpdate();
    } else if (playerSelection === computerSelection) {
        results.textContent = `It was a tie! The battle continues!`;
    } else {
        results.textContent = `Wrong decision traveler! Your choice of ${playerSelection} is susceptible to ${computerSelection}!`;
        ++computerScore;
        scoreUpdate();
    }
}

function gameStart () {
    playerScore = 0;
    computerScore = 0;
    choices.forEach(choice => {
        choice.disabled = false
        choice.style.visibility = "visible";
    });
    restart.style.visibility = 'hidden';
    restart.disabled = true;
    results.textContent = "";
    score.textContent = `${playerScore} - ${computerScore}`;
}

function gameEnd () {
    choices.forEach(choice => {
        choice.disabled = true;
        choice.style.visibility = "hidden";
    });
    restart.style.visibility = 'visible';
    restart.disabled = false;
}

function scoreUpdate() {
    if (playerScore === 5) {
        score.textContent = "Victory! You have escaped the forest! GG!";
        choices.disabled = true;
        gameEnd(); 
    } else if (computerScore === 5) {
        score.textContent = "HAH! Pathetic! You are now lost in the forest for the rest of eternity!";
        choices.disabled = true;
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
    choice.addEventListener ('click', () => {
        playRound(choice.textContent);
        })
    });

restart.addEventListener('click', gameStart);


