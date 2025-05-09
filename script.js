playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    function playRound(humanChoice, computerChoice) {
        //To make something case-insensitive, 
        // convert everything to either lower case or uppercase
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
    
        if (humanChoice == "scissors") {
            if (computerChoice == "scissors") {
                console.log("It's a draw! Both chose Scissors");
            } else if (computerChoice == "paper") {
                humanScore++;
                console.log("You win! Scissors beats Paper");
            } else {
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            }
        }
    
        if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                console.log("It's a draw! Both chose Paper");
            } else if (computerChoice == "scissors") {
                computerScore++;
                console.log("You lose! Scissors beats Paper");
            } else {
                humanScore++;
                console.log("You win! Paper beats Rock");
            }
        }
    
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                humanScore++;
                console.log("You win! Rock beats Scissors");
            } else if (computerChoice == "paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock");
            } else {
                console.log("It's a draw! Both chose Rock");
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

function getHumanChoice() {
    let sign = window.prompt("What is your choice");
    return sign;
}

