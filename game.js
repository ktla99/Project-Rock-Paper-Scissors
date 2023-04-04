const rock = 'rock';
const scissor = 'scissor';
const paper = 'paper';
const choices = [rock, paper, scissor];
let computerSelection = choices[Math.floor(Math.random() * choices.length)];
let playerSelection;

console.log(computerSelection);

let currentScore;
let computerScore;
let setNextGame;
let setGameOver;


//Do a function with random number found above from 1-3 below
function getComputerChoice (rock, paper, scissor) {
    choices.Math.floor(Math.random() * choices.length)
};

console.log(getComputerChoice);


function checkAnswer() {
    const userAnswer = 


function playRound(playSelection, computerSelection) {
    if (playSelection === rock && computerSelection === rock) {
         alert = 'It is a tie! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === rock && computerSelection === scissor) {
        alert = 'Rock beats scissor! You win! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === rock && computerSelection === paper) {
        alert = 'Rock loses to paper! You lose! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === paper && computerSelection === rock) {
        alert = 'Paper beats rock! You win! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === paper && computerSelection === scissor) {
        alert = 'Paper loses to scissor! You lose! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === paper && computerSelection === paper) {
        alert = 'It is a tie! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === scissor && computerSelection === rock) {
        alert = 'Scissor loses to rock! You lose! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === scissor && computerSelection === scissor) {
        alert = 'It is a tie! The scor eis now `${currentScore}';
        setGameOver();
    } else if (playSelection === scissor && computerSelection === paper) {
        alert = 'Scissor beats paper! You win! The score is now `${currentScore}';
    }
    }
};

