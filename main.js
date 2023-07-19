function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function getPlayerChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    const choice = prompt('Choose rock, paper, or scissors');

    if (!validChoices.includes(choice.toLowerCase())) {
        window.alert('Invalid input!');
        return getPlayerChoice();
    }

    return choice;
}


function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) return `It's a tie! You both chose ${player}!`;

    if (player === 'rock') {
        if (computer === 'paper') return 'You lose! Paper beats rock!';
        if (computer === 'scissors') return 'You win! Rock beats scissors!';
    }

    if (player === 'paper') {
        if (computer === 'rock') return 'You win! Paper beats rock!';
        if (computer === 'scissors') return 'You lose! Scissors beats paper!';
    }

    if (player === 'scissors') {
        if (computer === 'rock') return 'You lose! Rock beats scissors!';
        if (computer === 'paper') return 'You win! Scissors beats paper!';
    }

    return 'Invalid input!';

}

/* function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const result = playRound(getPlayerChoice(), getComputerChoice());

        if (result.includes('win')) playerScore++;
        if (result.includes('lose')) computerScore++;
        if (result.includes('tie')) i--;

        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log(`You win! ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose! ${computerScore} to ${playerScore}`);
    } else {
        console.log(`It's a tie! ${playerScore} to ${computerScore}`);
    }
}

game(); */