const p1scored = document.querySelector('#p1Scored');
const p2scored = document.querySelector('#p2Scored');
const reset = document.querySelector('#reset');
const playUpto = document.querySelector('#play-upto');
const p1Heading = document.querySelector('#p1Head');
const p2Heading = document.querySelector('#p2Head');

const players = {
    1: {
        score: 0,
        button: p1scored,
        heading: p1Heading,
        winText: 'P1 Won',
        loseText: 'P1 Lost'
    },
    2: {
        score: 0,
        button: p2scored,
        heading: p2Heading,
        winText: 'P2 Won',
        loseText: 'P2 Lost'
    }
};

let winningScore = parseInt(playUpto.value, 10);
let gameOver = false;

playUpto.addEventListener('change', function (e) {
    winningScore = parseInt(e.target.value, 10);
});

function opponentOf(playerId) {
    return playerId === 1 ? 2 : 1;
}

function hasWon(playerId) {
    const player = players[playerId];
    const opponent = players[opponentOf(playerId)];
    return player.score >= winningScore && player.score - opponent.score >= 2;
}

function setScoreButtonsDisabled(disabled) {
    p1scored.disabled = disabled;
    p2scored.disabled = disabled;
}

function declareWinner(winnerId) {
    const winner = players[winnerId];
    const loser = players[opponentOf(winnerId)];

    winner.button.innerText = winner.winText;
    loser.button.innerText = loser.loseText;
    winner.heading.classList.add('winner');
    loser.heading.classList.add('loser');
    gameOver = true;
    setScoreButtonsDisabled(true);
}

function updateScore(playerId) {
    if (gameOver) {
        return;
    }

    const player = players[playerId];
    player.score++;
    player.heading.innerText = `${player.score}`;
    playUpto.disabled = true;

    if (hasWon(playerId)) {
        declareWinner(playerId);
    }
}

p1scored.addEventListener('click', function () {
    updateScore(1);
});

p2scored.addEventListener('click', function () {
    updateScore(2);
});

reset.addEventListener('click', function () {
    players[1].score = 0;
    players[2].score = 0;
    p1Heading.innerText = '0';
    p2Heading.innerText = '0';
    p1scored.innerText = '+1 Player One';
    p2scored.innerText = '+1 Player Two';
    gameOver = false;
    playUpto.disabled = false;
    p1Heading.classList.remove('winner', 'loser');
    p2Heading.classList.remove('winner', 'loser');
    setScoreButtonsDisabled(false);
});
