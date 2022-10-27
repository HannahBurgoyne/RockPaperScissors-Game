//assign 1 to rock 
let rock = 1;
//assign 2 to paper 
let paper = 2;
//assign 3 to scissors
let scissors = 3;


//write function getComputerChoice which randomly returns 'rock', 'paper' or 'scissors'
//generate a random number between 1 and 3 
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*(3)+1);
    return computerChoice;
}

//prompt player to submit their choice 
let playerSelection = prompt("Rock, paper or scissors?");
//declare computerSelection and give it value of invoked getComputerChoice function 
let computerSelection = getComputerChoice();
//write function playRound which takes two parameters - playerSelection and computerSelection and returns loser/winner result




//3 beats 2
//2 beats 1
//1 beats 3