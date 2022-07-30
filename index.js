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

function equalsIgnoreCase(anotherString) {
    return (this == anotherString) ? true
        : (anotherString != null)
        && (anotherString.value.length == value.length)
        && regionMatches(true, 0, anotherString, 0, value.length);
}

//plays one round
function playRound(cpuChoice, playerChoice) {

    cpuChoice = cpuChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    console.log(cpuChoice);


    //checks for a tie then to see if the Computer won the round

    if (playerChoice === cpuChoice) {
        console.log("Tie");
    } else if ((cpuChoice === "rock" && playerChoice === "scissors") ||
        (cpuChoice === "paper" && playerChoice === "rock") ||
        (cpuChoice === "scissors" && playerChoice === "paper")) {
        console.log("Cumputer wins");
    }

//two cases of me trying to use the equalsIgnoreCase to no avail

    /*
        if(playerChoice.equalsIgnoreCase("Rock") && cpuChoice === "Scissors"){
          console.log("Rock beats Scissors, you win!");
        } else if(playerChoice.equalsIgnoreCase("Rock") && cpuChoice === "Rock"){
            console.log("Its a tie! Try again!");
        } else if(playerChoice.equalsIgnoreCase("Rock") && cpuChoice === "Paper"){
    console.log("Paper beats Rock, computer wins!");
        }
    */

    /*
    switch (playerChoice) {

        case playerChoice === "rock":
            if (cpuChoice === "rock") {
                console.log("Its a Tie! Try Again!");
            }
            if (cpuChoice === "paper") {
                console.log("Paper beats Rock, computer wins!");
            }
            if (cpuChoice === "scissors") {
                console.log("Rock beats Scissors, you win!");
            }
            break;

        case playerChoice === "scissors":
            if (cpuChoice === "rock") {
                console.log("Rock beats Scissors, computer wins!");
            }
            if (cpuChoice === "paper") {
                console.log("Scissors beats Paper, you win!");
            }
            if (cpuChoice === "scissors") {
                console.log("Its a Tie! Try Again!");
            }

            break;

        case playerChoice === "paper":
            if (cpuChoice === "rock") {
                console.log("Paper beats Rock, you win!");
            }
            if (cpuChoice === "paper") {
                console.log("Its a Tie! Try Again!");
            }
            if (cpuChoice === "scissors") {
                console.log("Scissors beats paper, computer wins!");
            }

            break;

    }
*/
}

playRound(getComputerChoice(), playerChoice);