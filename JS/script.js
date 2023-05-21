// Utwórz zmienną przechowującą wartość początkową koloru tła
var initialColor = '#FFFFFF';

// Utwórz zmienną przechowującą wartość docelową koloru tła
var targetColor = '#121212';

// Utwórz zmienną przechowującą liczbę pikseli, po których ma nastąpić zmiana koloru
var scrollThreshold = 500;

// Utwórz funkcję, która zostanie wywołana przy przewijaniu strony
function changeBackgroundColor() {
  // Pobierz aktualną pozycję przewijania strony
  var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Oblicz procentowy postęp przewijania w zakresie od 0 do 1
  var scrollProgress = currentScrollPosition / scrollThreshold;

  // Jeśli procentowy postęp przewijania jest mniejszy lub równy 1, kontynuuj zmianę koloru
  if (scrollProgress <= 1) {
    // Oblicz wartości RGB dla aktualnego koloru na podstawie postępu przewijania
    var r = Math.round(parseInt(initialColor.slice(1, 3), 16) * (1 - scrollProgress) + parseInt(targetColor.slice(1, 3), 16) * scrollProgress);
    var g = Math.round(parseInt(initialColor.slice(3, 5), 16) * (1 - scrollProgress) + parseInt(targetColor.slice(3, 5), 16) * scrollProgress);
    var b = Math.round(parseInt(initialColor.slice(5, 7), 16) * (1 - scrollProgress) + parseInt(targetColor.slice(5, 7), 16) * scrollProgress);

    // Zastosuj nowy kolor tła do elementu body
    document.body.style.backgroundColor = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
  }
}

// Dodaj nasłuchiwanie zdarzenia przewijania strony
window.addEventListener('scroll', changeBackgroundColor);