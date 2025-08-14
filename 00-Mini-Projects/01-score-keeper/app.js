
const playerOneButton = document.getElementById('player-one-button');
const playerTwoButton = document.getElementById('player-two-button');
const resetButton = document.getElementById('reset');

const playerOneScoreDisplay = document.getElementById('player-one-score');
const playerTwoScoreDisplay = document.getElementById('player-two-score');

let p1Score = 0;
let p2Score = 0;
let winingScore = 7;
let gameOver = false; 

playerOneButton.addEventListener('click', function() {
    
    if (!gameOver) {
        p1Score++;
        if (p1Score === winingScore) gameOver = true;
        playerOneScoreDisplay.textContent = p1Score;
    } 
});

playerTwoButton.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winingScore) gameOver = true;
        playerTwoScoreDisplay.textContent = p2Score;
    } 
});