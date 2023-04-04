const rock = 'rock';
const scissor = 'scissor';
const paper = 'paper';
const choices = [rock, paper, scissor];

let computerSelection = choices[Math.floor(Math.random() * choices.length)];

console.log(computerSelection);

const answers = document.querySelector('.answers');
const lastResult = document.querySelector('.lastResult');
const rightOrWrong = document.querySelector('.rightOrWrong');
const confirmChoice = document.querySelector('.confirmChoice');
const choiceField = document.querySelector('.choiceField');



//Do a function with random number found above from 1-3 below
function getComputerChoice (rock, paper, scissor) {
    choices.Math.floor(Math.random() * choices.length)
};

console.log(getComputerChoice);




function playRound(playSelection, computerSelection) {
    if (playSelection === rock && computerSelection === rock) {
         return 'It is a tie! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === rock && computerSelection === scissor) {
        return 'Rock beats scissor! You win! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === rock && computerSelection === paper) {
        return 'Rock loses to paper! You lose! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === paper && computerSelection === rock) {
        return 'Paper beats rock! You win! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === paper && computerSelection === scissor) {
        return 'Paper loses to scissor! You lose! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === paper && computerSelection === paper) {
        return 'It is a tie! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === scissor && computerSelection === rock) {
        return 'Scissor loses to rock! You lose! The score is now `${currentScore}';
        setGameOver();
    } else if (playSelection === scissor && computerSelection === scissor) {
        return 'It is a tie! The scor eis now `${currentScore}';
        setGameOver();
    } else if (playSelection === scissor && computerSelection === paper) {
        return 'Scissor beats paper! You win! The score is now `${currentScore}';
    }
};



