 // Button Element auswählen
    const button = document.getElementById('button');
    // Audio Element für Klick-Sound
    const sound = document.getElementById('click_sound');
    // Counter-Anzeige Element
    const counterEl = document.getElementById('counter');

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
