// Funkcja, która zostanie wykonana po załadowaniu całego dokumentu
function init() {

    // Pobranie elementu
    var burgerLink = document.getElementById("burger");
    var closeLink = document.getElementById("x");
    var opcjeBurger = document.getElementsByClassName("option_burger");
  
    // Pobranie elementu div ukrytego menu burgerowego
    var hiddenMenuDiv = document.getElementById("hidden_burger_menu");
  


    burgerLink.addEventListener("click", function() {
      // Ustawienie wartości display na block dla diva ukrytego menu burgerowego
        hiddenMenuDiv.style.display = "block";
    });

    closeLink.addEventListener("click", function() {
        // Ustawienie wartości display na block dla diva ukrytego menu burgerowego
        hiddenMenuDiv.style.display = "none";
    });

    for (var i = 0; i < opcjeBurger.length; i++) {
        opcjeBurger[i].addEventListener("click", function() {
            hiddenMenuDiv.style.display = "none";
        });
    }
  }
  
  // Nasłuchiwanie na zdarzenie DOMContentLoaded
  document.addEventListener("DOMContentLoaded", init);
  