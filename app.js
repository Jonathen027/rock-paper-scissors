const playerChoice = "rock"
const playerToUpperCase = playerChoice.toUpperCase();
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
        return "It a draw try again!!!"
    }
    if (playerSelection === "ROCK"){
        if (player > computerSelection){
            playerScore+=1
            return "Rock beats scissors! You win!!!"
        }
        else if (player < computerSelection){
            computerScore+=1
            return "Paper beats rock! You lose!!!"
        }
    }
    if (playerSelection === "SCISSORS"){
        if (player > computerSelection){
            playerScore+=1
            return "Scissors beats paper! You win!!!"
        }
        else if (player < computerSelection){
            computerScore+=1
            return "Rock beats scissors! You lose!!!"
        }
    }
    if (playerSelection === "PAPER"){
        if (player > computerSelection){
            playerScore+=1
            return "Paper beats rock! You win!!!"
        }
        else if (player < computerSelection){
            computerScore+=1
            return "Scissors beats paper! You lose!!!"
        }
    }
}

function game () {
    while (onOff ){
        console.log(playRound(playerToUpperCase, getComputerChoice()))
        if (playerScore === 5){
            console.log("YOU WON :) CONGRATULATIONS !!!!")
            onOff = false
        }
        else if(computerScore === 5){
            console.log("YOU LOST :( GAMEOVER!!!")
            onOff = false
        }
    }
}

game()

