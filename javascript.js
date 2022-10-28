


//write function getComputerChoice which randomly returns 'rock', 'paper' or 'scissors' - passed test
function getComputerChoice() {
    let options = [
        "rock",
        "paper",
        "scissors"
    ]
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

//prompt player to submit their choice 
let playerSelection = prompt("Rock, paper or scissors?");
//convert playerSelection string to lower case string
playerSelection = playerSelection.toLowerCase();

//declare computerSelection and give it value of invoked getComputerChoice function 
let computerSelection = getComputerChoice();

//write function playRound which takes two parameters - playerSelection and computerSelection and returns loser/winner result
function playRound(playerSelection, computerSelection) {

    //player winning conditionals
    if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You win! Rock beats scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("You win! Scissors beat paper");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You win! Paper beats rock")
        //player losing conditionals
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("You lose! Rock beats scissors");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("You lose! Scissors beat paper");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You lose! Paper beats rock");
    //player did not enter a valid input
    } else alert("Try entering rock, paper or scissors again");

    return playRound(playerSelection, computerSelection);
}

//function to keep game to 5 rounds 

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}

console.log(game());