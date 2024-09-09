
let gameTimeRemaining = 0;
let defaultGameDuration = 120;
let gameCountdownInterval = null;
let startGameButton = document.getElementById("startGameButton");
let stopGameButton = document.getElementById("stopGameButton");
let gameUpdateInterval = null;
let currentGameScore = 0;
let highestGameScore = 0;
let scoreDisplayText = document.getElementById("currentGameScore");
let highscoreDisplayText = document.getElementById("highScoreDisplay");
let timerDisplayText = document.getElementById("currentTimeRemaining");
let gameRunningInfoContainer = document.getElementById("gameRunningInfo");
let gamePlayContainer = document.getElementById("gamePlayArea");

// becuase of function hoisting, we can call these functions before they are declared!
// These are called as soon as the page loads:
toggleGameControlButtons();
toggleGameplayContent();
updateHighScore();

// Game Score and Timer 

function gameTimeStep(){
	// update score displayed
	scoreDisplayText.innerText = "Score: " + currentGameScore;

	// update time remaining displayed
	timerDisplayText.innerText = "Time Remaining: " + gameTimeRemaining;

    // update the highscore based on score ASAP
    updateHighScore();
}

function toggleGameplayContent(){
    // toggle the score, timer text, and game area elements
    if (gameTimeRemaining > 0){
        gameRunningInfoContainer.style.display = "inherit";
        gamePlayContainer.style.display = "inherit";
    } else {
        gameRunningInfoContainer.style.display = "none";
        gamePlayContainer.style.display = "none"; 
    }
}

function updateHighScore(){
    // check local storage for a high score
    highestGameScore = localStorage.getItem("highScore") || 0;

    // compare highe score to current score
    // if current score is higher than high score, 
    if (currentGameScore > highestGameScore){
        // write to local storage
        localStorage.setItem("highScore", currentGameScore);

        // update high score text
        highestGameScore = currentGameScore;
    }

    // make sure the text is always reflecting the value
    // even if value didn't change, because HTML has placeholder value that is not valid
    highscoreDisplayText.innerText = "High Score: " + highestGameScore;
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



function startGame(desiredGameTime = defaultGameDruation){
    gameTimeRemaining = desiredGameTime;
    // isGameRunning = true;
    console.log("Started the game. Game time remaining is now: " + gameTimeRemaining);

    // toggle game controls
    toggleGameControlButtons();
    // toggle game content
    toggleGameplayContent();

    gameCountdownInterval = setInterval(() => {
        gameTimeRemaining -= 1;
        console.log("Game time remaing is counting down, it is now... " + gameTimeRemaining);
        
        if (gameTimeRemaining <= 0){
            // if game has no time remaining, stop subtracting from it!
            
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

    // stop all intervals
    clearInterval(gameCountdownInterval);
    clearInterval(gameUpdateInterval);
    gameTimeStep();

    // toggle game controls
    toggleGameControlButtons();
    // toggle game content
    toggleGameplayContent();

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