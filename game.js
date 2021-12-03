const buttons = document.querySelectorAll('.playBtn');
const displayScorePlayer = document.querySelector('#player-score');
const displayScoreComp = document.querySelector('#computer-score');
const playerChoiceImg = document.querySelector('#player-choice');
const compChoiceImg = document.querySelector('#comp-choice');
const playBtns = document.querySelector('.btnBox');
const gameOvr = document.querySelector('.results');
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let playerSelection;
displayScorePlayer.innerHTML = playerScore;
displayScoreComp.innerHTML = computerScore;


function computerPlay() {
    let randomReturn = Math.floor(Math.random() * 3);

    switch(randomReturn) {
        case 0:
            result = 'rock';
            compChoiceImg.setAttribute('src', 'images/rock.jpg');
            compChoiceImg.classList.add('active');
            break;
        case 1:
            result = 'paper';
            compChoiceImg.setAttribute('src', 'images/paper.jpg');
            compChoiceImg.classList.add('active');
            break;
        case 2:
            result = 'scissors';
            compChoiceImg.setAttribute('src', 'images/scissors.jpg');
            compChoiceImg.classList.add('active');
            break;
    }
    return result;
}

function playerPlay(choice) {
    let playerResult;

    switch(choice) {
        case 'play-rock':
            playerResult = 'rock';
            playerChoiceImg.setAttribute('src', 'images/rock.jpg');
            playerChoiceImg.classList.add('active');
            break;
        case 'play-paper':
            playerResult = 'paper';
            playerChoiceImg.setAttribute('src', 'images/paper.jpg');
            playerChoiceImg.classList.add('active');
            break;
        case 'play-scissors':
            playerResult = 'scissors';
            playerChoiceImg.setAttribute('src', 'images/scissors.jpg');
            playerChoiceImg.classList.add('active');
            break;
    }
    return playerResult;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let btnId = button.id;
        let btnString = btnId.toString();
        playerSelection = playerPlay(btnString);
        playRound(playerSelection, computerPlay());

        if(playerScore == 5 || computerScore == 5) {
            declareWinner();
        }
    });

})

function playRound(playerSelection, computerSelection) {
    let result;

    if(playerSelection == computerSelection) {
        result = 'tie';
    }
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'loss';
    }
    if(playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'loss';
    }
    if(playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'loss';
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'win';
    }
    if(playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'win';
    }
    if(playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'win';
    }

    keepScore(result);
}


function keepScore(roundResult) {

    if(roundResult === 'win') {
        playerScore++;
        displayScorePlayer.innerHTML = `${playerScore}`;
    }else if(roundResult === 'loss') {
        computerScore++;
        displayScoreComp.innerHTML = `${computerScore}`;
    } else {
        tieScore++;
    }
}

function declareWinner() {
    let winner = document.querySelector('#winner');

    if(playerScore == 5) {
        winner.innerHTML = 'You win!';
    } else {
        winner.innerHTML = 'You lose, try again!';
    }

    playBtns.classList.remove('active');
    gameOvr.classList.add('active');

}


    const reset = document.querySelector('#end-game');
    reset.addEventListener('click', () => {
        gameOvr.classList.remove('active');
        playerScore = 0;
        computerScore = 0;
        displayScorePlayer.innerHTML = playerScore;
        displayScoreComp.innerHTML = computerScore;
        compChoiceImg.classList.remove('active');
        playerChoiceImg.classList.remove('active');
        playBtns.classList.add('active');
    });
