let playerChoice = prompt("Enter Rock, Paper, or Scissors");

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

//plays one round
function playRound(cpuChoice, playerChoice) {

    //if(playerChoice.equalsIgnoreCase("Rock") && cpuChoice === "Scissors"){
    //  console.log("Rock beats Scissors, you win!");
    //}

    //*
    /*
    switch (playerChoice) {

        case playerChoice.equalsIgnoreCase("Rock"):
            if (cpuChoice === "Rock") {
                console.log("Its a Tie! Try Again!");
            }
            if (cpuChoice === "Paper") {
                console.log("Paper beats Rock, computer wins!");
            }
            if (cpuChoice === "Scissors") {
                console.log("Rock beats Scissors, you win!");
            }
            break;

        case playerChoice.equalsIgnoreCase("Scissors"):
            if (cpuChoice === "Rock") {
                console.log("Rock beats Scissors, computer wins!");
            }
            if (cpuChoice === "Paper") {
                console.log("Scissors beats Paper, you win!");
            }
            if (cpuChoice === "Scissors") {
                console.log("Its a Tie! Try Again!");
            }

            break;

        case playerChoice.equalsIgnoreCase("Paper"):
            if (cpuChoice === "Rock") {
                console.log("Paper beats Rock, you win!");
            }
            if (cpuChoice === "Paper") {
                console.log("Its a Tie! Try Again!");
            }
            if (cpuChoice === "Scissors") {
                console.log("Scissors beats paper, computer wins!");
            }

            break;

    }
*/
}

playRound(getComputerChoice(), playerChoice);