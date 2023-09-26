const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const scoreBoard = document.getElementById("score-board")
const yourScore = document.createElement("p");
const comScore = document.createElement("p")
const message = document.createElement("p")
const scoreResult = document.createElement("h2")

const player = 1
let onOff = true
let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    const computer = Math.floor(Math.random()*3)
    return computer
}

function playRound (playerSelection, computerSelection){
    
    if (player === computerSelection){
        message.textContent = "It a draw try again!!!"
    }
    if (playerSelection === "rock"){
        if (player > computerSelection){
            playerScore+=1
            yourScore.textContent = `Player: ${playerScore}`;
            message.textContent = "Rock beats scissors! You win!!!"
        }
        else if (player < computerSelection){
            computerScore+=1
            comScore.textContent = `Computer: ${computerScore}`
            message.textContent = "Paper beats rock! You lose!!!"
        }
    }
    if (playerSelection === "scissors"){
        if (player > computerSelection){
            playerScore+=1
            yourScore.textContent = `Player: ${playerScore}`;
            message.textContent =  "Scissors beats paper! You win!!!"
        }
        else if (player < computerSelection){
            computerScore+=1
            comScore.textContent = `Computer: ${computerScore}`
            message.textContent = "Rock beats scissors! You lose!!!"
        }
    }
    if (playerSelection === "paper"){
        if (player > computerSelection){
            playerScore+=1
            yourScore.textContent = `Player: ${playerScore}`;
            message.textContent =  "Paper beats rock! You win!!!"
        }
        else if (player < computerSelection){
            computerScore+=1
            comScore.textContent = `Computer: ${computerScore}`
            message.textContent = "Scissors beats paper! You lose!!!"
        }
    }
}


function result(){
    if (playerScore === 5) {
        scoreResult.textContent = "YOU WON !"
        scoreBoard.append(scoreResult)
    }
    else if (computerScore === 5){
        scoreResult.textContent = "YOU LOSE !"
        scoreBoard.append(scoreResult)
    }
}

function clickRock () {
   playRound("rock",getComputerChoice())
         if (playerScore === 5){
            rockBtn.removeEventListener("click", clickRock)
            paperBtn.removeEventListener("click", clickRock)
            scissorsBtn.removeEventListener("click", clickRock)
            result()
    }
        else if (computerScore === 5){
            rockBtn.removeEventListener("click", clickRock)
            paperBtn.removeEventListener("click", clickRock)
            scissorsBtn.removeEventListener("click", clickRock)
            result()
    }
}

function clickPaper () {
    playRound("paper",getComputerChoice())
          if (playerScore === 5){
            rockBtn.removeEventListener("click", clickPaper)
            paperBtn.removeEventListener("click", clickPaper)
            scissorsBtn.removeEventListener("click", clickPaper)
            result()
     }
         else if (computerScore === 5){
             rockBtn.removeEventListener("click", clickPaper)
             paperBtn.removeEventListener("click", clickPaper)
             scissorsBtn.removeEventListener("click", clickPaper)
             result()
     }
 }

 function clickScissors () {
    playRound("scissors",getComputerChoice())
          if (playerScore === 5){
            rockBtn.removeEventListener("click", clickScissors)
            paperBtn.removeEventListener("click", clickScissors)
            scissorsBtn.removeEventListener("click", clickScissors)
            result()
     }
         else if (computerScore === 5){
             rockBtn.removeEventListener("click", clickScissors)
             paperBtn.removeEventListener("click", clickScissors)
             scissorsBtn.removeEventListener("click", clickScissors)
             result()
     }
 }

function game() {
    playerScore = 0
    computerScore = 0
    yourScore.textContent = `Player: ${playerScore}`;
    computerScore = 0
    message.textContent = "Choose your choice"
    yourScore.textContent = "Player: 0"
    comScore.textContent = "Computer: 0"
    scoreBoard.append(message)
    scoreBoard.append(yourScore)
    scoreBoard.append(comScore)
    rockBtn.addEventListener("click", clickRock)
    paperBtn.addEventListener("click", clickPaper)
    scissorsBtn.addEventListener("click", clickScissors) 
}

game()

