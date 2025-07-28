const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

let humanScore = 0
let computerScore = 0

let rounds = 1

const rockBtn = document.getElementById('rock')
const paperBtn= document.getElementById('paper')
const scissorsBtn= document.getElementById('scissors')
const humanSelectionEl = document.getElementById('humanSelection')
const computerSelectionEl = document.getElementById("computerSelection")
const humanScoreEl = document.getElementById('humanScore')
const computerScoreEl = document.getElementById('computerScore')
const roundEl = document.querySelector("h1")
let humanSelection;
const resultsEl = document.getElementById('results')

humanScoreEl.textContent = `Your score: ${humanScore}`

computerScoreEl.textContent = `Computer score: ${computerScore}`

roundEl.textContent = `Round ${rounds}`

rockBtn.addEventListener('click', () => {
    humanSelection = ROCK
    humanSelectionEl.textContent = `You chose ${humanSelection[0].toUpperCase() + humanSelection.slice(1)}`
    const computerSelection = getComputerChoice()
    computerSelectionEl.textContent = `Your opponent chose ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`
    playGame(humanSelection, computerSelection)
    console.log(humanScore)
    
})
paperBtn.addEventListener('click', () => {
    humanSelection = PAPER
    humanSelectionEl.textContent = `You chose ${humanSelection[0].toUpperCase() + humanSelection.slice(1)}`
    const computerSelection = getComputerChoice()
    computerSelectionEl.textContent = `Your opponent chose ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`
    playGame(humanSelection, computerSelection)

})
scissorsBtn.addEventListener('click', () => {
    humanSelection = SCISSORS
    humanSelectionEl.textContent = `You chose ${humanSelection[0].toUpperCase() + humanSelection.slice(1)}`
    const computerSelection = getComputerChoice()
    computerSelectionEl.textContent = `Your opponent chose ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`
    playGame(humanSelection, computerSelection)


})




function getComputerChoice(){
    const choices = [ROCK, PAPER, SCISSORS]
    const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

function getHumanChoice(){
    let choice = prompt("Choose 1 for rock, 2 for paper, 3 for scissors")
    switch (choice) {
        case "1":
            return ROCK
            break;
        case "2":
            return PAPER
            break;
        case "3":
            return SCISSORS
            break;
        default:
            alert("Please choose a 1, 2, 3")
            return;
    }
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === ROCK && computerChoice === PAPER){
        computerScore += 1
        resultsEl.textContent = "Paper beat rock! You lose this round!"
    }else if (humanChoice === ROCK && computerChoice === SCISSORS){
        humanScore += 1
        resultsEl.textContent = 'Rock beat scissors! You win this round!'
    }else if(humanChoice === ROCK && computerChoice=== ROCK){
        resultsEl.textContent = "Both choices are rocks! A draw!"
    }else if(humanChoice === PAPER && computerChoice === ROCK){
        humanScore += 1
        resultsEl.textContent = 'Paper beat rock! You win this round!'
    }else if(humanChoice === PAPER && computerChoice === SCISSORS){
        computerScore += 1
        resultsEl.textContent = "Scissors beat paper! You lose this round!"
    }else if(humanChoice === PAPER && computerChoice === PAPER){
        resultsEl.textContent = "Both choices are papers! A draw!"
    }else if(humanChoice === SCISSORS && computerChoice === ROCK){
        computerScore += 1
        resultsEl.textContent = 'Rock beat scissors! You lose this round!'
    }else if(humanChoice === SCISSORS && computerChoice === PAPER){
        humanScore += 1
        resultsEl.textContent = "Scissors beat paper! You win this round!"
    }else if (humanChoice === SCISSORS && computerChoice === SCISSORS){
        resultsEl.textContent = "Both choices are scissors! A draw!"
    }
}

function playGame(humanC, computerC) {

   
        playRound(humanC, computerC)
        humanScoreEl.textContent = `Your score: ${humanScore}`

        computerScoreEl.textContent = `Computer score: ${computerScore}`
        rounds++
        roundEl.textContent = `Round ${rounds}`


}


