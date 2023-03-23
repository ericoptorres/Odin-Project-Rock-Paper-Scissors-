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



let score = 0
function playRound (computerChoice, playerChoice){
    let result
    if (computerChoice === playerChoice){
        result = `It's a draw! ${computerChoice} vs ${playerChoice}.`
    }
    else if (computerChoice === "rock" && playerChoice === "paper"){
        result = "You won, paper beats rock!"
        score++
    }
    else if (computerChoice === "rock" && playerChoice === "scissors"){
        result = "You lost, rock beats scissors!"
        score--
    }
    else if (computerChoice === "paper" && playerChoice === "scissors"){
        result = "You won, scissors beats paper!"
        score++
    }
    else if (computerChoice === "paper" && playerChoice === "rock"){
        result = "You lost, paper beats rock!"
        score--
    }
    else if (computerChoice === "scissors" && playerChoice === "rock"){
        result = "You won, rock beats scissors!"
        score++
        
    }
    else if (computerChoice === "scissors" && playerChoice === "paper"){
        result = "You lost, scissors beats paper!"
        score--
    }
    else{
        result = "Error. Prob typed wrong"
    }
    alert(result)
    return result
}


function game(){
    let round = 1
    while (round < 6){
        playRound(getComputerChoice(), playerSelection())
        round++
    }
    if (score < 0){
        finalResult = "You lost the game!"
    }
    else if (score === 0){
        finalResult = "The game is draw!"
    }
    else{
        finalResult = "You won the game!"
    }
    console.log(finalResult)
    return finalResult
}

game()

