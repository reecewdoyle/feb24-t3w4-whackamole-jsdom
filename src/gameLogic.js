
let gameTimeRemaining = 0;
let defaultGameDruation = 120;
let gameCountdownInterval = null;
let startGameButton = document.getElementById("startGameButton");
let stopGameButton = document.getElementById("stopGameButton");
let gameUpdateInterval = null;
let currentGameScore = 0;
let higestGameScore = 0;
let scoreDisplatText = document.getElementById("currentGameScore");
let highscoreDsiplayText = document.getElementById("highscoreDsiplay");
let timerDisplatText = document.getElementById("currentTimeRemaining");

// Game Score and Timer

function gameTimeStep(){
    // update score displayed
    scoreDisplayText.innerText = "Score: " + currentGameScore;

    // update time remaining displayed
    timerDisplayText.innerText = "TimeRemaining: " + gameTimeRemaining;
}































// if gameTimeRemaining < 0){

// }

function toggleGameControlButtons(){
    // check gameTimeRemaining

    // reveal or hide startGameButton

    // hide or reveal stopGameButton

    if (gameTimeRemaining > 0){
        // game has started
        startGameButton.style.display = "none";
        stopGameButton.style.display = "inherit";
    } else {
        // game has finished
        startGameButton.style.display = "inherit";
        stopGameButton.style.display = "none";
    }

}

toggleGameControlButtons();

function startGame(desiredGameTime = defaultGameDruation){
    gameTimeRemaining = desiredGameTime;
    // isGameRunning = true;
    console.log("Started the game. Game time remaining is now: " + gameTimeRemaining);

    // toggle game controls
    toggleGameControlButtons();

    gameCountdownInterval = setInterval(() => {
        gameTimeRemaining -= 1;
        console.log("Game time remaing is counting down, it is now... " + gameTimeRemaining);
        
        if (gameTimeRemaining <= 0){
            // if game has no time remaining, stop subtracting from it!
            clearInterval(gameCountdownInterval);
            console.log("Game is finished!");
            stopGame();
        }
        
    }, 1000);

    gameUpdateInterval = setInterval(gameTimeStep, 100);

}

// startGame(); // gameTimeRemaining becomes 120
// startGame(60); // gameTimeRemaining becomes 60

function stopGame(){
    gameTimeRemaining = 0;

    // toggle game controls
    toggleGameControlButtons();

    console.log("Stopped the game. Game time remaining is now: " + gameTimeRemaining);
    
}

startGameButton.addEventListener("click", () => {
    startGame(3);
});

stopGameButton.addEventListener("click", () => {
    stopGame();
});













// let isGameRunning = false;

// if (isGameRunning){
//     // make moles appear to be whacked by the user    
// }

// if (isGameRunning){
//     // decrease the time remaining
// }

// if (isGameRunning){
//     // hide the Start Game button
// }