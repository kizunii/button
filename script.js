// Elemente auswählen
const sound = document.getElementById('click_sound');
const button = document.getElementById('button');
const counterEl = document.getElementById('counter');
const upgrade_button = document.getElementById('upgrade_button');
const auto_clicker_button = document.getElementById('auto_clicker');

// Variablen aus LocalStorage oder Standardwerte
let pussy_points = parseInt(localStorage.getItem('ClickCounter'))
let multiplier = parseInt(localStorage.getItem('Multiplier')) || 1;
let auto_clicker = parseInt(localStorage.getItem('AutoClicker')) || 0;

let multiplier_cost = 25;
let auto_clicker_cost = 20;

// Punkte anzeigen
function displayPointsAmt() {
  counterEl.innerText = "You have " + pussy_points + " Pussy Points!";
}

// Direkt beim Laden die Anzeige updaten
displayPointsAmt();

// AutoClicker Punkte pro Sekunde hinzufügen
setInterval(() => {
  if(auto_clicker > 0){
    pussy_points += auto_clicker;
    displayPointsAmt();
    localStorage.setItem('ClickCounter', pussy_points);
  }
}, 1000);

// Hauptbutton Klick
button.addEventListener('click', function(){
  sound.currentTime = 0;
  sound.play();
  pussy_points += multiplier;
  displayPointsAmt();
  localStorage.setItem('ClickCounter', pussy_points);
});

// Upgrade Multiplier
upgrade_button.addEventListener('click', function(){
  if(pussy_points >= multiplier_cost){
    pussy_points -= multiplier_cost;
    multiplier_cost*=1.3
    multiplier ++
    multiplier_cost = Math.floor(multiplier_cost * 1.5);
    displayPointsAmt();
    upgrade_button.innerText = "Upgrade button for "+multiplier_cost+" Points"
    localStorage.setItem('ClickCounter', pussy_points);
    localStorage.setItem('Multiplier', multiplier);
  }
  else{
    alert("not enough Points")
  }
});

// Kaufe AutoClicker
auto_clicker_button.addEventListener('click', function(){
  if(pussy_points >= auto_clicker_cost){
    pussy_points -= auto_clicker_cost;
    auto_clicker += 1;
    auto_clicker_cost = Math.floor(auto_clicker_cost * 1.5);
    displayPointsAmt();
    localStorage.setItem('ClickCounter', pussy_points);
    localStorage.setItem('AutoClicker', auto_clicker);
  }
});
