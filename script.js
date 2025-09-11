// Audio Element für Klick-Sound
const sound = document.getElementById('click_sound');
const button = document.getElementById("button");
const counterEl = document.getElementById("counter");

// Variablen
let pussy_points = parseInt(localStorage.getItem('ClickCounter')) || 0;
let multiplier = 1;

// Punkte anzeigen
function displayPointsAmt() {
  counterEl.innerText = "You have " + pussy_points + " Pussy Points!";
}

// Beim Laden sofort anzeigen
displayPointsAmt();

// Button-Klick
button.addEventListener('click', function() {
  // Sound abspielen
  sound.currentTime = 0;
  sound.play();

  // Punkte erhöhen
  pussy_points += multiplier;

  // Punkte anzeigen
  displayPointsAmt();

  // Punkte speichern
  localStorage.setItem('ClickCounter', pussy_points);
});
