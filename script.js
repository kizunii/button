const highscoreDisplay = document.getElementById('highscore');
let highscore = 0;

// Im Button-Click Event (da wo du counter++ machst) einfügen:
if (counter > highscore) {
  highscore = counter;
  highscoreDisplay.textContent = "Highscore: " + highscore;
}
