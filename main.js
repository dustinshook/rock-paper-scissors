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
    const baseElement = document.querySelector('#game');
    const scoreBoard = baseElement.querySelector('#scoreboard');
    const resultMessage = baseElement.querySelector('#result-message');
    const endGameElement = document.querySelector('#game-over');

    const home_score = scoreBoard.querySelector('#computer-score');
    const away_score = scoreBoard.querySelector('#user-score');

    const messageReset = () => {
        resultMessage.textContent = "";
    };

    const displayResultMessage = (result) => {
        const resultElement = document.createElement('h1');
        resultElement.textContent = result;
        resultElement.classList.toggle('result');

        resultMessage.appendChild(resultElement);
    };

    const displayChoiceIcon = (choice, player) => {
        const iconClassMap = {
            user: {
                rock: 'fas fa-hand-rock fa-rotate-90',
                paper: 'fas fa-hand-paper fa-rotate-90',
                scissors: 'fas fa-hand-scissors fa-flip-horizontal'
            },
            computer: {
                rock: 'fas fa-hand-rock fa-rotate-270',
                paper: 'fas fa-hand-paper fa-rotate-270',
                scissors: 'fas fa-hand-scissors'
            }
        };
        const icon = document.getElementById(`${player}-choice`);
        icon.classList = iconClassMap[player][choice];
    };

    baseElement.addEventListener('click', (e) => {
        const choices = ['rock', 'paper', 'scissors'];
        const delegatedElement = e.target.closest('div');

        if (choices.includes(delegatedElement?.id)) {
            messageReset();
            const playerSelection = delegatedElement.id;
            displayChoiceIcon(playerSelection, 'user');

            const computerSelection = getComputerChoice();
            displayChoiceIcon(computerSelection, 'computer');

            const result = playRound(playerSelection, computerSelection);

            displayResultMessage(result);

            if (result.includes('win')) {
                away_score.textContent = parseInt(away_score.textContent) + 1;
                away_score.classList.add('win');

                setTimeout(() => {
                    away_score.classList.remove('win');
                }, 1000);

            } else if (result.includes('lose')) {
                home_score.textContent = parseInt(home_score.textContent) + 1;
                home_score.classList.add('win');

                setTimeout(() => {
                    home_score.classList.remove('win');
                }, 1000);

            } else {
                return;
            }

            let home_score_count = parseInt(home_score.textContent);
            let away_score_count = parseInt(away_score.textContent);

            if (home_score_count == '5') {
                baseElement.classList.toggle('hidden');
                endGameElement.classList.toggle('hidden');

                endGameElement.querySelector('#game-over-message').textContent = `You lost! ${away_score_count} - ${home_score_count}`;
            } else if (away_score.textContent === '5') {
                baseElement.classList.toggle('hidden');
                endGameElement.classList.toggle('hidden');

                endGameElement.querySelector('#game-over-message').textContent = `You won! ${away_score_count} - ${home_score_count}`;
            } else {
                return;
            }

        }
    });

};

const landingPage = document.querySelector('#landing');
const restartButton = document.querySelector('#restart-game');

landingPage.addEventListener('click', (e) => {
    if (e.target.id === 'start-game') {
        landingPage.classList.toggle('hidden');
        document.querySelector('#game').classList.toggle('hidden');
        rps_game();
    }
});

restartButton.addEventListener('click', () => {
    // RELAOD PAGE
    location.reload();
});