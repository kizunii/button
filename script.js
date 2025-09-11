 // Button Element auswählen
    const button = document.getElementById('button');
    // Audio Element für Klick-Sound
    const sound = document.getElementById('click_sound');
    // Counter-Anzeige Element
    const counterEl = document.getElementById('counter');

let button = document.getElementById("button")
let counter = document.getElementById("counter")

let upgrade_button = document.getElementById('upgrade_button');
let auto_clicker = document.getElementById('auto_clicker');

let pussy_points = 0

let multiplier = 1
let multiplier_cost = 25

let auto_clicker = 0
let autoclicker = 20

function displayPointsAmt(){
 button.innertext = "You have"+Points+" Pussy Points!"
});

button.addEventListener('click',function(){
 Points+=multiplier
 displayPointsAmt()
})


     // Counter aus localStorage laden oder 0, wenn nicht vorhanden
    let counter = parseInt(localStorage.getItem('catClickCounter')) || 0;
    counterEl.textContent = counter;

    // Event Listener für Button Klick
    button.addEventListener('click', () => {
      // Klick-Sound abspielen
      sound.currentTime = 0; // Reset Audio, falls vorher noch läuft
      sound.play();

      // Counter hochzählen
      counter++;
      // Counter im HTML anzeigen
      counterEl.textContent = counter;

      // Counter im localStorage speichern
      localStorage.setItem('catClickCounter', counter);
    });
