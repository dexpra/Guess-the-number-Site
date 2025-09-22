let secretNumber;
let attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guessInput").value = "";
}

document.getElementById("submitGuess").addEventListener("click", function() {
  const userGuess = Number(document.getElementById("guessInput").value);
  attempts++;

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    document.getElementById("feedback").textContent = "⚠️ Please enter a number between 1 and 100!";
    return;
  }

  if (userGuess === secretNumber) {
    document.getElementById("feedback").textContent = `YAY! Correct! The number was ${secretNumber}. Maybe try again?`;
    document.getElementById("feedback").style.color = "green";
  } else if (userGuess < secretNumber) {
    document.getElementById("feedback").textContent = "Naah... Too low! Try again.";
    document.getElementById("feedback").style.color = "red";
  } else {
    document.getElementById("feedback").textContent = "Naah... Too high! Try again.";
    document.getElementById("feedback").style.color = "red";
  }

  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
});

document.getElementById("restartGame").addEventListener("click", startGame);


startGame();
