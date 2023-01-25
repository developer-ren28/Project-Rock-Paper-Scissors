
let x;

// Generate random number from 0 - 9
// Divide the numbers to sets: [0, 1, 2], [3, 4, 5], [6, 5, 7]
// Assign sets to the outcome:
// [0, 1, 2] - Rock
// [3, 4, 5] - Paper
// [6, 7, 8] - Scissors
// The number generated will select the outcome
// If number generated is 9, run the code again

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);

    let choice;
    
    switch (randomNumber) {
        case 0:
        case 1:
        case 2:
            choice = "rock";
            break;
        case 3:
        case 4:
        case 5:
            choice = "paper";
            break;
        case 6:
        case 7:
        case 8:
            choice = "scissors";
            break;
        default:
            return getComputerChoice(); // recursion needs return if you want it to return a value
    };

    return choice;
};


// Game's Rules
// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// If player chooses Rock and computer chooses Scissors or 
// player chooses Scissors and computer chooses Paper or
// player chooses Paper and computer chooses Rock,
// the player wins
// If player chooses Rock and computer chooses Paper or 
// player chooses Scissors and computer chooses Rock or
// player chooses Paper and computer chooses Scissors,
// the player lose
// If they choose the same, it's a tie

function playRound(playerSelection, computerSelection) {



    let result = ["Winner","resultStatement"];

    if ((playerSelection == "rock" && computerSelection === "scissors") || 
        (playerSelection == "scissors" && computerSelection === "paper") || 
        (playerSelection == "paper" && computerSelection === "rock")) {

        result[0] = "Player";
        result[1] = `You Win! ${playerSelection} beats ${computerSelection}.`;

    } else if ((playerSelection == "rock" && computerSelection === "paper") || 
               (playerSelection == "scissors" && computerSelection === "rock") || 
               (playerSelection == "paper" && computerSelection === "scissors")) {
        
                result[0] = "Computer";
                result[1] = `Computer Wins! ${computerSelection} beats ${playerSelection}.`;

    } else if ((playerSelection == "rock" && computerSelection === "rock") || 
               (playerSelection == "scissors" && computerSelection === "scissors") || 
               (playerSelection == "paper" && computerSelection === "paper")) {
        
                result[0] = "Tie";
                result[1] = `It's a Tie!`;
    };

    return result;
};

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        
        
        let playerPrompt = prompt("Rock, Paper, or Scissors?", "");
        
        let playerSelection = verifier(playerPrompt);

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        let winner = result[0];
        let resultStatement = result[1];
        

        if (winner === "Player") {
            playerScore++;
            console.log(resultStatement);
        } else if (winner === "Computer") {
            computerScore++;
            console.log(resultStatement);
        } else if (winner === "Tie") {
            console.log(resultStatement);
        }; 
    };

    if (playerScore > computerScore) {
        console.log(`You are the ultimate winner!`);
    } else {
        console.log(`Computer is the ultimate winner!`);
    };
};

function verifier(playerInput) {

        let inputLowercased = playerInput.toLowerCase();

        if (inputLowercased === "rock" || 
            inputLowercased === "scissors" || 
            inputLowercased === "paper") {
                
                return inputLowercased;

        } else {
            alert("Please enter Rock, Paper, or Scissors.");
            location.reload();
        };
};

game();