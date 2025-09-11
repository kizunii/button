// Audio Element für Klick-Sound
const sound = document.getElementById('click_sound');
const button = document.getElementById("button");
const counterEl = document.getElementById("counter");
const auto_clicker_button = document.getElementById('auto_clicker');
const upgrade_button = document.getElementById('upgrade_button');

// Variablen
let pussy_points = parseInt(localStorage.getItem('ClickCounter')) || 0;
let multiplier = 1;
let multiplier_cost = 25;
let auto_clicker = 0;
let auto_clicker_cost = 20;

// Punkte anzeigen
function displayPointsAmt() {
  counterEl.innerText = "You have " + pussy_points + " Pussy Points!";
}

// Beim Laden sofort anzeigen
displayPointsAmt();

// Button-Klick
button.addEventListener('click', () => {
  // Sound abspielen
  sound.currentTime = 0;
  sound.play();

  // Punkte erhöhen
  pussy_points += multiplier;
  displayPointsAmt();

  // Punkte speichern
  localStorage.setItem('ClickCounter', pussy_points);
});
