    // Audio Element für Klick-Sound
    const sound = document.getElementById('click_sound');
    const button = document.getElementById("button");
    const counterEl = document.getElementById("counter")
    const auto_clicker_button = document.getElementById('auto_clicker');
    const upgrade_button = document.getElementById('upgrade_button');

    // Counter aus localStorage laden oder 0, wenn nicht vorhanden
    let pussy_points = parseInt(localStorage.getItem('ClickCounter')) || 0;
    counterEl.textContent = pussy_points;

let multiplier = 1
let multiplier_cost = 25

let auto_clicker = 0
let auto_clicker_cost = 20

function displayPointsAmt(){
 counterEl.innerText = "You have"+pussy_points+" Pussy Points!"
};

button.addEventListener('click',function(){
 pussy_points+=multiplier
 displayPointsAmt()
})

      // Klick-Sound abspielen
      sound.currentTime = 0; // Reset Audio, falls vorher noch läuft
      sound.play();

      // Counter hochzählen
      pussy_points++;

      // Counter im localStorage speichern
      localStorage.setItem('ClickCounter', counter);
    });
