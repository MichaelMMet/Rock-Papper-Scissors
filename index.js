//let playerChoice = prompt("Enter Rock, Paper, or Scissors");
let computerScore = 0;

let playerScore = 0;

let rounds = 0;

const rockIcon = document.querySelector(".fa-hand-back-fist");
const paperIcon = document.querySelector(".fa-hand");
const scissorsIcon = document.querySelector(".fa-hand-scissors");

const playerCircle = document.querySelector(".pCircle");
const comCircle = document.querySelector(".comCircle");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const results = document.querySelector(".results");
const score = document.querySelector(".score");
const newGame = document.querySelector(".newGame");
newGame.style.display = "none";
playerCircle.style.display = "none";
//score.textContent = playerScore + " - " + computerScore;
//results.textContent = "Its a tie! Next Round!";

rock.addEventListener('click', playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);

newGame.addEventListener("click", makeNewGame);




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

        return "Rock";
    } else if (playerChoice === "paper") {

        return "Paper";
    } else {
        return "Scissors";
    }
}


//plays one round
function playRound(choice) {
    let playerChoice = getPlayerChoice(choice);
    let cpuChoice = getComputerChoice();
    console.log(cpuChoice);
    console.log(playerChoice)


    //checks for a tie then to see if the Computer won the round
    if (playerChoice === cpuChoice) {
        rounds++;
        score.textContent = playerScore + " - " + computerScore;
        results.textContent = "Its a tie! Next Round!";
        if (playerChoice === "Rock") {
            let iconInfo = rockIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";

        } else if (playerChoice === "Paper") {
            let iconInfo = paperIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";

        } else {
            let iconInfo = scissorsIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";

        }
    } else if ((cpuChoice === "Rock" && playerChoice === "Scissors") ||
        (cpuChoice === "Paper" && playerChoice === "Rock") ||
        (cpuChoice === "Scissors" && playerChoice === "Paper")) {
        rounds++;
        computerScore++;
        score.textContent = playerScore + " - " + computerScore;

        if (playerChoice === "Rock") {
            let iconInfo = rockIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";

        } else if (playerChoice === "Paper") {
            let iconInfo = paperIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";

        } else {
            let iconInfo = scissorsIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";

        }
    } else {
        rounds++;
        playerScore++;
        score.textContent = playerScore + " - " + computerScore;
        results.textContent = playerChoice + " beats " + cpuChoice + ", You win this round!";

        if (playerChoice === "Rock") {
            let iconInfo = rockIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";
        } else if (playerChoice === "Paper") {
            let iconInfo = paperIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";
        } else {
            let iconInfo = scissorsIcon.getBoundingClientRect();
            let iconXPos = Math.floor(iconInfo.x);
            let iconYPos = Math.floor(iconInfo.y);
            console.log(iconInfo);
            iconYPos -= 27;
            iconXPos -= 27;
            playerCircle.style.top = iconYPos + "px";
            playerCircle.style.left = iconXPos + "px";
            playerCircle.style.display = "block";
        }
    }

}

//plays 5 rounds of Rock, Paper, Scissors and decides a winner

function playGame(choice) {
    let playerChoice = choice.currentTarget.className;
    /*let um = score.getBoundingClientRect();
    console.log(um);
    console.log(um.left)*/
    playRound(playerChoice);
    console.log(rounds);

    // playRound(playerChoice);

    if (rounds >= 5) {


        if (playerScore > computerScore) {
            results.textContent = "You win! The score was " + playerScore + "-" + computerScore;
            newGame.style.display = "block";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            playerCircle.style.display = "none";

        } else if (computerScore > playerScore) {
            results.textContent = "Computer Wins! The score was " + playerScore + "-" + computerScore;
            newGame.style.display = "block";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            playerCircle.style.display = "none";

        } else {
            results.textContent = "Its a tie! The score was " + playerScore + "-" + computerScore;
            newGame.style.display = "block";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            playerCircle.style.display = "none";

        }
    }

}

function makeNewGame() {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    newGame.style.display = "none";

    score.textContent = playerScore + " - " + computerScore;
    results.textContent = "New Game! Pick a move!"


}

//plays the game


