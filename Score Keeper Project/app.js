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
        p1Heading.innerText = `${p1Score}`;
        if (p1Score == winningScore) {
            p1scored.innerText = 'P1 Won';
            p2scored.innerText = 'P2 Lost';
            gameOver = true;
        }
    }

});
p2scored.addEventListener('click', function () {
    p2Score++;
    if (!gameOver) {
        p2Heading.innerText = `${p2Score}`;
        if (p2Score == winningScore) {
            p2scored.innerText = 'P2 Won';
            p1scored.innerText = 'P1 Lost';
            gameOver = true;
        }
    }

});
reset.addEventListener('click', function () {
    p1Score = 0;
    p2Score = 0;
    p1Heading.innerText = `${p1Score}`;
    p2Heading.innerText = `${p2Score}`;
    gameOver = false;
});
