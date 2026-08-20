const p1scored = document.querySelector('#p1Scored');
const p2scored = document.querySelector('#p2Scored');
const reset = document.querySelector('#reset');
const playUpto = document.querySelector('#play-upto');
const p1Heading = document.querySelector('#p1Head');
const p2Heading = document.querySelector('#p2Head');
let winningScore = parseInt(playUpto.value, 10);
let gameOver = false;
playUpto.addEventListener('change', function (e) {
    let selectedVal = e.target.value;
    if (selectedVal == 7) { winningScore = 7; }
    else if (selectedVal == 11) { winningScore = 11; }
    else {
        winningScore = 21;
    }
});
let p1Score = 0, p2Score = 0;
p1scored.addEventListener('click', function () {
    p1Score++;
    if (!gameOver) {
        playUpto.disabled = true;
        p1Heading.innerText = `${p1Score}`;
        if (p1Score == winningScore) {
            p1scored.innerText = 'P1 Won';
            p1Heading.classList.add('winner');
            p2scored.innerText = 'P2 Lost';
            p2Heading.classList.add('loser');
            gameOver = true;
            p1scored.classList.add('btn-disabled');
            p2scored.classList.add('btn-disabled');
        }
    }

});
p2scored.addEventListener('click', function () {
    p2Score++;
    if (!gameOver) {
        playUpto.disabled = true;
        p2Heading.innerText = `${p2Score}`;
        if (p2Score == winningScore) {
            p2scored.innerText = 'P2 Won';
            p2Heading.classList.add('winner');
            p1scored.innerText = 'P1 Lost';
            p1Heading.classList.add('loser');
            gameOver = true;
            p1scored.classList.add('btn-disabled');
            p2scored.classList.add('btn-disabled');
        }
    }

});
reset.addEventListener('click', function () {
    p1Score = 0;
    p2Score = 0;
    p1Heading.innerText = `${p1Score}`;
    p2Heading.innerText = `${p2Score}`;
    p1scored.innerText = '+1 Player One';
    p2scored.innerText = '+1 Player Two';
    gameOver = false;
    playUpto.disabled = false;
    p1Heading.classList.remove('winner', 'loser');
    p2Heading.classList.remove('winner', 'loser');
    p1scored.classList.remove('btn-disabled');
    p2scored.classList.remove('btn-disabled');
});
