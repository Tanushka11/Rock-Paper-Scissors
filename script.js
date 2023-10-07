const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(playerChoice, computerChoice, result) {
  resultDiv.innerHTML = `
    You chose ${playerChoice}.<br>
    Computer chose ${computerChoice}.<br>
    ${result}
  `;
}
