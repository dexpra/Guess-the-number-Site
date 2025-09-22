let secretNumber;
let attempts;
let maxAttempts;
let maxNumber;

function startGame() {
  const difficulty = document.getElementById("difficulty").value;
  if (difficulty === "easy") {
    maxNumber = 50;
    maxAttempts = 10;
  } else if (difficulty === "medium") {
    maxNumber = 100;
    maxAttempts = 7;
  } else {
    maxNumber = 200;
    maxAttempts = 5;
  }

  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  attempts = 0;

  document.querySelector(".game-container p").textContent = `Guess a number between 1 and ${maxNumber}. You have ${maxAttempts} attempts.`;

  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guessInput").value = "";
  document.hetElementById("guessInput").setAttribute("max", maxNumber);
}

document.getElementById("submitGuess").addEventListener("click", function() {
  const userGuess = Number(document.getElementById("guessInput").value);
  attempts++;

  if (!userGuess || userGuess < 1 || userGuess > maxNumber) {
    document.getElementById("feedback").textContent = "⚠️ Please enter a number between 1 and ${";
    return;
  }

  if (userGuess === secretNumber) {
    document.getElementById("feedback").textContent = `YAY! Correct! The number was ${secretNumber}. Maybe try again?`;
    document.getElementById("feedback").style.color = "green";
  }else if (attempts >= maxAttempts) {
    document.getElementById("feedback").textContent =
    `Game over! The number was ${secretNumber} ! Try again?`;
  } else if (userGuess < secretNumber) {
    document.getElementById("feedback").textContent = "Naah... Too low! Try again.";
    document.getElementById("feedback").style.color = "red";
  } else {
    document.getElementById("feedback").textContent = "Naah... Too high! Try again.";
    document.getElementById("feedback").style.color = "red";
  }

  document.getElementById("attempts").textContent = `Attempts: ${attempts} / ${maxAttempts}`;
});

document.getElementById("restartGame").addEventListener("click", startGame);
document.getElementById("difficulty").addEventListener("change", startGame);


startGame();
