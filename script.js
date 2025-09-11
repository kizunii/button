const sound = document.getElementById('click_sound');
const button = document.getElementById("button");
const counterEl = document.getElementById("counter");
const upgrade_button = document.getElementById('upgrade_button');
const auto_clicker_button = document.getElementById('auto_clicker');

let pussy_points = parseInt(localStorage.getItem('ClickCounter')) || 0;
let multiplier = parseInt(localStorage.getItem('Multiplier')) || 1;
let auto_clicker = parseInt(localStorage.getItem('AutoClicker')) || 0;

let multiplier_cost = 25;
let auto_clicker_cost = 20;

// Punkte anzeigen
function displayPointsAmt() {
  counterEl.innerText = "You have " + pussy_points + " Pussy Points!";
}

// AutoClicker Punkte automatisch hinzufügen
setInterval(() => {
  if (auto_clicker > 0) {
    pussy_points += auto_clicker;
    displayPointsAmt();
    localStorage.setItem('ClickCounter', pussy_points);
  }
}, 1000);

// Klick auf Hauptbutton
button.addEventListener('click', () => {
  sound.currentTime = 0;
  sound.play();
  pussy_points += multiplier;
  displayPointsAmt();
  localStorage.setItem('ClickCounter', pussy_points);
});

// Upgrade Multiplier
upgrade_button.addEventListener('click', () => {
  if (pussy_points >= multiplier_cost) {
    pussy_points -= multiplier_cost;
    multiplier += 1;
    multiplier_cost = Math.floor(multiplier_cost * 25);
    displayPointsAmt();
    localStorage.setItem('ClickCounter', pussy_points);
    localStorage.setItem('Multiplier', multiplier);
  }
});

// Kaufe AutoClicker
auto_clicker_button.addEventListener('click', () => {
  if (pussy_points >= auto_clicker_cost) {
    pussy_points -= auto_clicker_cost;
    auto_clicker += 1;
    auto_clicker_cost = Math.floor(auto_clicker_cost * 20);
    displayPointsAmt();
    localStorage.setItem('ClickCounter', pussy_points);
    localStorage.setItem('AutoClicker', auto_clicker);
  }
});

// Beim Laden sofort anzeigen
displayPointsAmt();
