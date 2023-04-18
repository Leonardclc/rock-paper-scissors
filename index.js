function getComputerChoice() {
    const values = ["Rock","Paper","Scissors"]
        valueToUse = values[Math.floor(Math.random() * values.length)];
        return valueToUse;
}

function playRound() {
    const playerSelection = window.prompt().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Win";
    }  else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Win";
    }  else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie";
    }  else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Lose";
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Lose";
    }  else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie";
    }  else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Win";
}
}


function game() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
}