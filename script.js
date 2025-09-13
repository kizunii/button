 function roundToInt(value) {
  return Math.round(value + Number.EPSILON);
}
 
// Elemente auswählen
const sound = document.getElementById('click_sound');
const button = document.getElementById('button');
const counterEl = document.getElementById('counter');
const upgrade_button = document.getElementById('upgrade_button');
const auto_clicker_button = document.getElementById('auto_clicker');
const add_points_button = document.getElementById('add_points');
const reset_button = document.getElementById('reset_button');
const sound_2 = document.getElementById('Upgrade_sound');
const openBtn = document.getElementById('open-btn');
const mySidebar = document.getElementById('mySidebar');

// Variablen aus LocalStorage oder Standardwerte
let pussy_points = parseInt(localStorage.getItem('ClickCounter')) || 0;
let multiplier = parseInt(localStorage.getItem('Multiplier')) || 1;
let auto_clicker = parseInt(localStorage.getItem('AutoClicker')) || 0;
let multiplier_cost = parseFloat(localStorage.getItem('MultiplierCost')) || 25;
let auto_clicker_cost = parseFloat(localStorage.getItem('AutoClickerCost')) || 20;

// Buttons direkt mit geladenen Kosten beschriften
function updateButtonTexts() {
  upgrade_button.innerText = "Upgrade button for " + roundToInt(multiplier_cost) + " Points [ " + roundToInt(multiplier) + "x ]";
  auto_clicker_button.innerText = "Buy Autoclicker for " + roundToInt(auto_clicker_cost) + " Points [ " + roundToInt(auto_clicker) + " ]";
}

// Anzeige direkt beim Laden updaten
function displayPointsAmt() {
  counterEl.innerText = "You have " + roundToInt(pussy_points) + " Pussy Points!";
}

displayPointsAmt();
updateButtonTexts();

// AutoClicker Punkte pro Sekunde hinzufügen
let autoClickerInterval = setInterval(() => {
  if(auto_clicker > 0){
    pussy_points += auto_clicker;
    displayPointsAmt();
  }
}, 1000);

reset_button.addEventListener('click', () => {
  // Punkte & Upgrades zurücksetzen
  pussy_points = 0;
  multiplier = 1;
  auto_clicker = 0;

  multiplier_cost = 25;
  auto_clicker_cost = 20;

  // LocalStorage zurücksetzen
  localStorage.setItem('ClickCounter', pussy_points);
  localStorage.setItem('Multiplier', multiplier);
  localStorage.setItem('AutoClicker', auto_clicker);
  localStorage.setItem('MultiplierCost', multiplier_cost);
  localStorage.setItem('AutoClickerCost', auto_clicker_cost);

  // Anzeige updaten
  displayPointsAmt();
  updateButtonTexts();
});

// Hauptbutton Klick
button.addEventListener('click', function(){
  sound.currentTime = 0;
  sound.play();
  pussy_points += multiplier;
  displayPointsAmt();
  localStorage.setItem('ClickCounter', pussy_points);
});

// Add Points Button (Test)
add_points_button.addEventListener('click', () => {
  pussy_points += 100000000000;
  displayPointsAmt();
  localStorage.setItem('ClickCounter', pussy_points);
});

// Upgrade Multiplier
upgrade_button.addEventListener('click', function(){
  if(pussy_points >= multiplier_cost){
    pussy_points -= multiplier_cost;
    sound_2.currentTime= 0
    sound_2.play()
    multiplier++;
    multiplier_cost = roundToInt(multiplier_cost * 1.3);

    displayPointsAmt();
    updateButtonTexts();

    // speichern nach Änderung
    localStorage.setItem('ClickCounter', pussy_points);
    localStorage.setItem('Multiplier', multiplier);
    localStorage.setItem('MultiplierCost', multiplier_cost);
  }
});

// Kaufe AutoClicker
auto_clicker_button.addEventListener('click', function(){
  if(pussy_points >= auto_clicker_cost){
    pussy_points -= auto_clicker_cost;
    sound_2.currentTime= 0
    sound_2.play()
    auto_clicker++;
    auto_clicker_cost = roundToInt(auto_clicker_cost * 1.25);

    displayPointsAmt();
    updateButtonTexts();

    // speichern nach Änderung
    localStorage.setItem('ClickCounter', pussy_points);
    localStorage.setItem('AutoClicker', auto_clicker);
    localStorage.setItem('AutoClickerCost', auto_clicker_cost);
  }
});

function openSidebar() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

openBtn.addEventListener('click', openSidebar);
