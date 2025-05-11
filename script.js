playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector(".rock");
    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));

    const paper = document.querySelector(".paper");
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

    // const humanChoice = getHumanChoice();
    // playRound(humanChoice, computerChoice);
    
    function playRound(humanChoice, computerChoice) {
        //To make something case-insensitive, 
        // convert everything to either lower case or uppercase
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        const newHumanScore = document.querySelector(".humanScore");
        const newComputerScore = document.querySelector(".computerScore");
        const display = document.querySelector(".display")
    
        if (humanChoice == "scissors") {
            if (computerChoice == "scissors") {
                display.textContent = "It's a draw! Both chose Scissors";
            } else if (computerChoice == "paper") {
                humanScore++;
                display.textContent = "You win! Scissors beats Paper";
            } else {
                computerScore++;
                display.textContent = "You lose! Rock beats Scissors";
            }
        }
    
        if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                display.textContent = "It's a draw! Both chose Paper";
            } else if (computerChoice == "scissors") {
                computerScore++;
                display.textContent = "You lose! Scissors beats Paper";
            } else {
                humanScore++;
                display.textContent  = "You win! Paper beats Rock";
            }
        }
    
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                humanScore++;
                display.textContent = "You win! Rock beats Scissors";
            } else if (computerChoice == "paper") {
                computerScore++;
                display.textContent = "You lose! Paper beats Rock";
            } else {
                display.textContent = "It's a draw! Both chose Rock";
            }
        }
         newHumanScore.textContent = humanScore;
         newComputerScore.textContent = computerScore;

         if (humanScore == 5 || computerScore == 5) {
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;

            humanScore == 5 ? display.textContent = "You win!" : display.textContent = "You lose!"
         }
    }    
}

function getComputerChoice() {
    const choice = Math.random() * 3;
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function getHumanChoice() {
//     let sign = window.prompt("What is your choice");
//     return sign;
// }

