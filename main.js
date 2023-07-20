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

const rps_game = () => {
    const baseElement = document.querySelector('#rps-body');
    const scoreBoard = baseElement.querySelector('#scoreboard');
    const resultMessage = baseElement.querySelector('#result-message');

    const messageReset = () => {
        resultMessage.textContent = "";
    };

    const displayResultMessage = (result) => {
        const resultElement = document.createElement('h1');
        resultElement.textContent = result;
        resultElement.classList.toggle('result');

        resultMessage.appendChild(resultElement);
    };

    baseElement.addEventListener('click', (e) => {
        const choices = ['rock', 'paper', 'scissors'];
        const delegatedElement = e.target.closest('div');
        messageReset();

        if (choices.includes(delegatedElement.id)) {
            const playerSelection = delegatedElement.id;
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            displayResultMessage(result);
        }
    });

};

rps_game();