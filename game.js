function computerPlay() {
    let randomReturn = Math.floor(Math.random() * 3);

    switch(randomReturn) {
        case 0:
            result = 'rock';
            break;
        case 1:
            result = 'paper';
            break;
        case 2:
            result = 'scissors';
            break;
    }
    return result;
}

function playerPlay() {
    let select = prompt('Enter your choice: Rock, Paper, or Scissors');
    let selection = select.toLowerCase();

    return selection;
}

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

    return result;
}

//let playerSelection = playerPlay();
//let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let round = 1;
    let roundResult;
    let winner;

    /*if(roundResult.includes('win')) {
        playerScore++;
    }else if(roundResult.includes('lose')) {
        computerScore++;
    } else {
        tieScore++;
    }*/

    for(let i = 0; i < 5; i++) {
        //playRound(playerSelection, computerSelection);
            roundResult = playRound(playerPlay(), computerPlay()); //this is where it breaks, playRound is not called for each loop 
            //it is only called once and the same values used. why?????

            if(roundResult === 'win') {
                playerScore++;
            }else if(roundResult === 'loss') {
                computerScore++;
            } else {
                tieScore++;
            }

            round++;


        /*if(round === 5 && playerScore > computerScore) {
            winner = 'Congratulations, you win!';
        } else if(round === 5 && playerScore < computerScore) {
            winner = 'You lose, better luck next time!';
        } else {
            winner = 'Looks like this one is a draw!';
        }*/
    }

    /*if(roundResult === 'win') {
        playerScore++;
    }else if(roundResult === 'loss') {
        computerScore++;
    } else {
        tieScore++;
    }

    round++;*/

    if(round === 6 && playerScore > computerScore) {
        winner = 'Congratulations, you win!';
    } else if(round === 6 && playerScore < computerScore) {
        winner = 'You lose, better luck next time!';
    } else {
        winner = 'Looks like this one is a draw!';
    }

    //console.log(playerScore);
    //console.log(computerScore);
    //console.log(tieScore);

    return winner;
}

console.log(game());
