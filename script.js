playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    const computerChoice = getComputerChoice();

    const rock = document.querySelector(".rock");
    rock.addEventListener("click", () => playRound("rock", computerChoice));

    const paper = document.querySelector(".paper");
    paper.addEventListener("click", () => playRound("paper", computerChoice));

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", () => playRound("scissors", computerChoice));
    
    // const humanChoice = getHumanChoice();
    // playRound(humanChoice, computerChoice);
    
    function playRound(humanChoice, computerChoice) {
        //To make something case-insensitive, 
        // convert everything to either lower case or uppercase
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
    
        if (humanChoice == "scissors") {
            if (computerChoice == "scissors") {
                const display = document.querySelector(".display")
                display.textContent = "It's a draw! Both chose Scissors";
            } else if (computerChoice == "paper") {
                humanScore++;
                const display = document.querySelector(".display");
                display.textContent = "You win! Scissors beats Paper";
            } else {
                computerScore++;
                const display = document.querySelector(".display");
                display.textContent = "You lose! Rock beats Scissors";
            }
        }
    
        if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                const display = document.querySelector(".display");
                display.textContent = "It's a draw! Both chose Paper";
            } else if (computerChoice == "scissors") {
                computerScore++;
                const display = document.querySelector(".display");
                display.textContent = "You lose! Scissors beats Paper";
            } else {
                humanScore++;
                const display = document.querySelector(".display");
                display.textContent  = "You win! Paper beats Rock";
            }
        }
    
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                humanScore++;
                const display = document.querySelector(".display");
                display.textContent = "You win! Rock beats Scissors";
            } else if (computerChoice == "paper") {
                computerScore++;
                const display = document.querySelector(".display");
                display.textContent = "You lose! Paper beats Rock";
            } else {
                const display = document.querySelector(".display");
                display.textContent = "It's a draw! Both chose Rock";
            }
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

