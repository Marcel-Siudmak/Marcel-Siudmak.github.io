function init() {
    // Pobieranie elementu, którego wartości top i height będą zmieniane
    const element = document.getElementById('side_bar'); 

    // Określenie wartości początkowych
    let startTop = 96;

    // Obsługa przewijania strony
    window.addEventListener('scroll', function() {
    // Obliczenie postępu przewijania

    if(window.scrollY <= window.innerHeight){
        const scrollProgress = window.scrollY / (window.innerHeight);

        // Obliczenie wartości top i height w danym momencie
        const current= startTop - (startTop * scrollProgress);

        // Ustawienie wartości top i height dla elementu
        element.style.top = `${current}px`;
        element.style.height = `calc(100vh - ${current}px)`;
    }});

}


document.addEventListener("DOMContentLoaded", init);