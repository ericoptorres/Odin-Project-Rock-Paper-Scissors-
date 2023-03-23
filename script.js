function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function getComputerChoice () {
    let numberGenerated = getRandomInt(1, 3)
    let computerChoice = ""
    if (numberGenerated === 1){
        computerChoice = "rock"
    }
    else if (numberGenerated === 2){
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function playerSelection (){
    playerChoice = prompt("Please enter your choice: ") 
    return playerChoice = playerChoice.toLowerCase()
}

computerChoice = getComputerChoice()
playerChoice = playerSelection()


function playRound (computerChoice, playerChoice){
    let result
    if (computerChoice === playerChoice){
        result = `It's a draw! ${computerChoice} vs ${playerChoice}.`
    }
    else if (computerChoice === "rock" && playerChoice === "paper"){
        result = "You won, paper beats rock!"
    }
    else if (computerChoice === "rock" && playerChoice === "scissors"){
        result = "You lost, rock beats scissors!"
    }
    else if (computerChoice === "paper" && playerChoice === "scissors"){
        result = "You won, scissors beats paper!"
    }
    else if (computerChoice === "paper" && playerChoice === "rock"){
        result = "You lost, paper beats rock!"
    }
    else if (computerChoice === "scissors" && playerChoice === "rock"){
        result = "You won, rock beats scissors!"
    }
    else if (computerChoice === "scissors" && playerChoice === "paper"){
        result = "You lost, scissors beats paper!"
    }
    else{
        result = "Error. Prob typed wrong"
    }
    return result
}

console.log(playRound(computerChoice, playerChoice))



