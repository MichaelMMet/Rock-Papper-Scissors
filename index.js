//let playerChoice = prompt("Enter Rock, Paper, or Scissors");
let computerScore = 0;

let playerScore = 0;

let rounds = 0;

const rock = document.querySelector(".rock");

const paper = document.querySelector(".paper");

const scissors = document.querySelector(".scissors");

const results = document.querySelector(".results");
const score = document.querySelector(".score");



rock.addEventListener('click', playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);






//computer picks between rock, paper, or sciccors at random
function getComputerChoice() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    if (randomChoice === 1) {
        return "Rock";
    } else if (randomChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//runs a prompt to get a choice from the user
function getPlayerChoice(playerChoice) {
    if (playerChoice === "rock") {
        return "rock";
    } else if (playerChoice === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}


//plays one round
function playRound(choice) {
    let playerChoice = getPlayerChoice(choice);
    let cpuChoice = getComputerChoice();
    cpuChoice = cpuChoice.toLowerCase();
    console.log(cpuChoice);
    console.log(playerChoice)


    //checks for a tie then to see if the Computer won the round
    if (playerChoice === cpuChoice) {
        rounds++;
        score.textContent = playerScore + " - " + computerScore;
        results.textContent = "Its a tie! Next Round!";
    } else if ((cpuChoice === "rock" && playerChoice === "scissors") ||
        (cpuChoice === "paper" && playerChoice === "rock") ||
        (cpuChoice === "scissors" && playerChoice === "paper")) {
        rounds++;
        computerScore++;
        score.textContent = playerScore + " - " + computerScore;
        results.textContent = "Cumputer wins this round!";

    } else {
        rounds++;
        playerScore++;
        score.textContent = playerScore + " - " + computerScore;
        results.textContent = "You win this round!";

    }

}

//plays 5 rounds of Rock, Paper, Scissors and decides a winner

function playGame(choice) {
    let playerChoice = choice.currentTarget.className;

    playRound(playerChoice);
    console.log(rounds);

    // playRound(playerChoice);

    if (rounds >= 5) {


        if (playerScore > computerScore) {
            results.textContent = "You win! The score was " + playerScore + "-" + computerScore;
        } else if (computerScore > playerScore) {
            results.textContent = "Computer Wins! The score was " + playerScore + "-" + computerScore;
        } else {
            results.textContent = "Its a tie! The score was " + playerScore + "-" + computerScore;
        }
    }

}

//plays the game




