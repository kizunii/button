// Elemente auswählen
const sound = document.getElementById('click_sound');
const button = document.getElementById('button');
const counterEl = document.getElementById('counter');
const upgrade_button = document.getElementById('upgrade_button');
const auto_clicker_button = document.getElementById('auto_clicker');
const add_points_button = document.getElementById('add_points');
const reset_button = document.getElementById('reset_button');

// Variablen aus LocalStorage oder Standardwerte
let pussy_points = parseInt(localStorage.getItem('ClickCounter'))
let multiplier = parseInt(localStorage.getItem('Multiplier')) || 1;
let auto_clicker = parseInt(localStorage.getItem('AutoClicker')) || 0;
let multiplier_cost = parseFloat(localStorage.getItem('MultiplierCost')) || 25;
let auto_clicker_cost = parseFloat(localStorage.getItem('AutoClickerCost')) || 20;

function updateButtonTexts() {
  upgrade_button.innerText = "Upgrade button for " + Math.round(multiplier_cost*100)/100 + " Points";
  auto_clicker_button.innerText = "Buy Autoclicker for " + Math.round(auto_clicker_cost*100)/100 + " Points";
};

  updateButtonTexts();

// Nach Kauf/Upgrade speichern
localStorage.setItem('ClickCounter', pussy_points);
localStorage.setItem('Multiplier', multiplier);
localStorage.setItem('AutoClicker', auto_clicker);
localStorage.setItem('MultiplierCost', multiplier_cost);
localStorage.setItem('AutoClickerCost', auto_clicker_cost);

//teste
add_points_button.addEventListener('click', () => {
  pussy_points += 100000;                  // + Punkte
  displayPointsAmt();                   // Anzeige updaten
  localStorage.setItem('ClickCounter', pussy_points);  // speichern
});

// Punkte anzeigen
function displayPointsAmt() {
  counterEl.innerText = "You have " + Math.round(pussy_points*100)/100 + " Pussy Points!";
}

// Direkt beim Laden die Anzeige updaten
displayPointsAmt();

// AutoClicker Punkte pro Sekunde hinzufügen
let autoClickerInterval = setInterval(() => {
  if(auto_clicker > 0){
    pussy_points += auto_clicker;
    displayPointsAmt();
    localStorage.setItem('ClickCounter', pussy_points);
  }
}, 1000);

// Beim Reset:
reset_button.addEventListener('click', () => {
  // Punkte & Upgrades zurücksetzen
  pussy_points = 0;
  multiplier = 1;
  auto_clicker = 0;

  multiplier_cost = 25;
  auto_clicker_cost = 20;

  // Anzeige updaten
  displayPointsAmt();
  updateButtonTexts()

  // LocalStorage überschreiben
  localStorage.setItem('ClickCounter', pussy_points);
  localStorage.setItem('Multiplier', multiplier);
  localStorage.setItem('AutoClicker', auto_clicker);

  // altes Intervall stoppen
  clearInterval(autoClickerInterval);

  // neues Intervall starten
  autoClickerInterval = setInterval(() => {
    if (auto_clicker > 0) {
      pussy_points += auto_clicker;
      displayPointsAmt();
      localStorage.setItem('ClickCounter', pussy_points);
    }
  }, 1000);
});

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
    
    displayPointsAmt();
    updateButtonTexts()

      // speichern
    localStorage.setItem('ClickCounter', pussy_points);
    localStorage.setItem('Multiplier', multiplier);
    localStorage.setItem('MultiplierCost', multiplier_cost); // Kosten speichern
    
    upgrade_button.innerText = "Upgrade button for "+Math.round(multiplier_cost*100)/100+" Points"
 
  }
  else{
    alert("not enough Points")
  }
});

// Kaufe AutoClicker
auto_clicker_button.addEventListener('click', function(){
  if(pussy_points >= auto_clicker_cost){
    pussy_points -= auto_clicker_cost;
    auto_clicker_cost*=1.25
    auto_clicker ++
   
    displayPointsAmt();
    updateButtonTexts()

     // speichern
    localStorage.setItem('ClickCounter', pussy_points);
    localStorage.setItem('AutoClicker', auto_clicker);
    localStorage.setItem('AutoClickerCost', auto_clicker_cost); // Kosten speichern
    
    auto_clicker_button.innerText = "Buy Autoclicker for "+Math.round(auto_clicker_cost*100)/100+" Points"
  }
});
