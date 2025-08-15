
const playerOneButton = document.getElementById('player-one-button');
const playerTwoButton = document.getElementById('player-two-button');
const resetButton = document.getElementById('reset');

const playerOneScoreDisplay = document.getElementById('player-one-score');
const playerTwoScoreDisplay = document.getElementById('player-two-score');
const winingScoreSelect = document.getElementById('playto');
const winnerMsg = document.querySelector("#winner-message");

let p1Score = 0;
let p2Score = 0;
let winingScore = 7;
let gameOver = false; 

function updateWinner(player) {
  winnerMsg.textContent = `${player} Wins! 🎉`;
  winnerMsg.classList.remove("is-hidden");
  gameOver = true;
}

playerOneButton.addEventListener('click', function() {
    
    if (!gameOver) {
        p1Score++;
        if (p1Score === winingScore) {
            gameOver = true;
            playerOneScoreDisplay.classList.add('winner');
            playerTwoScoreDisplay.classList.add('loser');
            updateWinner('Player One');
        } 
        playerOneScoreDisplay.textContent = p1Score;
    } 
});

playerTwoButton.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winingScore) {
            gameOver = true;
            playerTwoScoreDisplay.classList.add('winner');
            playerOneScoreDisplay.classList.add('loser');
            updateWinner('Player Two');
            
        }
        playerTwoScoreDisplay.textContent = p2Score;
    }
});

resetButton.addEventListener('click', function() {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    playerOneScoreDisplay.textContent = p1Score;
    playerTwoScoreDisplay.textContent = p2Score;
    playerOneScoreDisplay.classList.remove('winner', 'loser');
    playerTwoScoreDisplay.classList.remove('winner', 'loser');
    winingScoreSelect.value = winingScore; 
    winnerMsg.classList.add("is-hidden");
    winnerMsg.textContent = "";
}

winingScoreSelect.addEventListener('change', function() {
    alert('Wining score changed to ' + this.value);
    winingScore = parseInt(this.value);
    reset();
})
