const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"


let humanScore = 0
let computerScore = 0

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
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log("Paper beat rock! You lose this round!")
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }else if (humanChoice === ROCK && computerChoice === SCISSORS){
        humanScore += 1
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log('Rock beat scissors! You win this round!')
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }else if(humanChoice === ROCK && computerChoice=== ROCK){
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log("Both choices are rocks! A draw!")
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }else if(humanChoice === PAPER && computerChoice === ROCK){
        humanScore += 1
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log('Paper beat rock! You win this round!')
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }else if(humanChoice === PAPER && computerChoice === SCISSORS){
        computerScore += 1
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log("Scissors beat paper! You lose this round!")
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }else if(humanChoice === PAPER && computerChoice === PAPER){
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log("Both choices are papers! A draw!")
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }else if(humanChoice === SCISSORS && computerChoice === ROCK){
        computerScore += 1
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log('Rock beat scissors! You lose this round!')
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }else if(humanChoice === SCISSORS && computerChoice === PAPER){
        humanScore += 1
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log("Scissors beat paper! You win this round!")
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }else if (humanChoice === SCISSORS && computerChoice === SCISSORS){
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log("Both choices are scissors! A draw!")
        console.log(`The score is yours:${humanScore} || computer:${computerScore}`)
    }
}



function playGame() {
    let rounds = 0
    while (rounds < 5){

        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        rounds ++
    }

}


playGame()