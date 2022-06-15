function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  let computer =
    computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
  return computer;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection) {
    let player = playerSelection.trim().toLowerCase();
    if (player === "rock" || player === "paper" || player === "scissors") {
      console.log("you have chosen " + player);
      let outcomeString = "";
      if (player === "rock") {
        if (computerSelection === "rock") {
          outcomeString = "It's a Draw!";
        } else if (computerSelection === "paper") {
          outcomeString = "Sorry, you Lose!";
        } else {
          outcomeString = "Congratulations! You Win!";
        }
      } else if (player === "scissors") {
        if (computerSelection === "scissors") {
          outcomeString = "It's a Draw!";
        } else if (computerSelection === "rock") {
          outcomeString = "Sorry, you Lose!";
        } else {
          outcomeString = "Congratulations! You Win!";
        }
      } else if (player === "paper") {
        if (computerSelection === "paper") {
          outcomeString = "It's a Draw!";
        } else if (computerSelection === "scissors") {
          outcomeString = "Sorry, you Lose!";
        } else {
          outcomeString = "Congratulations! You Win!";
        }
      }
      console.log("Computer has chosen " + computerSelection);
      return outcomeString;
    } else {
      alert('You didn\'t enter "Rock", "Paper", or "Scissors".');
      return "Failed";
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
}

function game() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let gameActive = true;
    let outcome;
    while (gameActive) {
      const playerSelection = prompt("Please enter Rock, Paper, or Scissors.");
      const computerSelection = computerPlay();
      outcome = playRound(playerSelection, computerSelection);
      if (outcome != "Failed") {
        gameActive = false;
      }
    }
    if (outcome === "Congratulations! You Win!") {
      humanScore += 1;
    } else if (outcome === "Sorry, you Lose!") {
      computerScore += 1;
    } else if (outcome === "It's a Draw!") {
      humanScore += 1;
      computerScore += 1;
    }
    console.log(outcome);
  }
  alert("Game Over! \nHuman: " + humanScore + "\nComputer: " + computerScore);
}

game();
