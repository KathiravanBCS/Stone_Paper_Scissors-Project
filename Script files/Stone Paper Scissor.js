// Set Date and Time
document.getElementById("dateOutput").textContent = new Date().toLocaleDateString();
document.getElementById("timeOutput").textContent = new Date().toLocaleTimeString();

// Variables
let movesLeft = 10, ourScore = 0, cpuScore = 0;
let movesLeftDisplay = document.getElementById("movesLeft");
let ourScoreDisplay = document.getElementById("ourScore");
let cpuScoreDisplay = document.getElementById("cpuScores");
let userImage = document.getElementById("userImage");
let cpuImage = document.getElementById("cpuImage");
let buttondiv = document.getElementById("ourChoices");
let resultpopup = document.getElementById("resultpopup");
let finalResultText = document.getElementById("finalResultText");

// Choices
let choices = ["stone", "paper", "scissors"];
choices.forEach(choice => {
    let btn = document.createElement("button");
    let img = document.createElement("img");
    img.src = `images/${choice}.jpg`;
    img.alt = choice;
    btn.appendChild(img);
    btn.onclick = () => playGame(choice);
    buttondiv.appendChild(btn);
});

// Play Game
function playGame(playerSelection) {
    if (movesLeft === 0) return;
    
    let computerSelection = choices[Math.floor(Math.random() * 3)];
    userImage.innerHTML = `<img src="images/${playerSelection}.jpg">`;
    cpuImage.innerHTML = `<img src="images/${computerSelection}.jpg">`;

    if (playerSelection === computerSelection) return;
    if ((playerSelection === "stone" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "stone") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        ourScore++;
    } else {
        cpuScore++;
    }

    ourScoreDisplay.textContent = `Your score: ${ourScore}`;
    cpuScoreDisplay.textContent = `CPU score: ${cpuScore}`;
    
    movesLeft--;
    movesLeftDisplay.textContent = `Moves left: ${movesLeft}`;

    if (movesLeft === 0) resultpopup.style.display = "flex";
}

// Restart
document.getElementById("restartbutton").onclick = () => location.reload();
