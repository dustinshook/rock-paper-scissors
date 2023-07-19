function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) return `It's a tie! You both chose ${player}!`;

}