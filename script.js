function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function getComputerChoice () {
    let numberGenerated = getRandomInt(1, 3)
    let choice = ""
    if (numberGenerated === 1){
        choice = "Rock"
    }
    else if (numberGenerated === 2){
        choice = "Paper"
    }
    else {
        choice = "Scissors"
    }
}


