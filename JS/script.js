// Utwórz zmienną przechowującą wartość początkową koloru tła
var initialColor = '#FFFFFF';

// Utwórz zmienną przechowującą wartość docelową koloru tła
var targetColor = '#121212';

// Utwórz zmienną przechowującą liczbę pikseli, po których ma nastąpić zmiana koloru
var scrollThreshold = window.innerHeight;

// Utwórz funkcję, która zostanie wywołana przy przewijaniu strony
function changeBackgroundColor() {
  // Pobierz aktualną pozycję przewijania strony
  var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Oblicz procentowy postęp przewijania w zakresie od 0 do 1
  var scrollProgress = currentScrollPosition / scrollThreshold;

  // Oblicz przeskalowany postęp przewijania
  var scaledProgress = Math.pow(scrollProgress, 2);

  // Jeśli currentScrollPosition jest większe niż scrollThreshold, ustaw kolor tła na #121212
  if (currentScrollPosition > scrollThreshold) {
    document.body.style.backgroundColor = targetColor;
  }
  // W przeciwnym razie kontynuuj zmianę koloru na podstawie przeskalowanego postępu przewijania
  else {
    // Oblicz wartości RGB dla aktualnego koloru na podstawie przeskalowanego postępu przewijania
    var r = Math.round(parseInt(initialColor.slice(1, 3), 16) * (1 - scaledProgress) + parseInt(targetColor.slice(1, 3), 16) * scaledProgress);
    var g = Math.round(parseInt(initialColor.slice(3, 5), 16) * (1 - scaledProgress) + parseInt(targetColor.slice(3, 5), 16) * scaledProgress);
    var b = Math.round(parseInt(initialColor.slice(5, 7), 16) * (1 - scaledProgress) + parseInt(targetColor.slice(5, 7), 16) * scaledProgress);

    // Zastosuj nowy kolor tła do elementu body
    document.body.style.backgroundColor = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
  }
}

// Dodaj nasłuchiwanie zdarzenia przewijania strony
window.addEventListener('scroll', changeBackgroundColor);
