

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Funcionalidad de la línea de tiempo
const years = [
    { year: "Simone de Beauvoir", description: "", image: "imagen1.jpg" },
    { year: "1960", description: "Evento importante en 1950.", image: "" },
    { year: "1960", description: "Evento importante en 1960.", image: "imagen3.jpg" },
    { year: "1980", description: "Evento importante en 1970.", image: "imagen4.jpg" },
    { year: "1990", description: "Evento importante en 1980.", image: "imagen5.jpg" },
  
];

let currentIndex = 0;

function showYear(index) {
    currentIndex = index;
    document.getElementById("year-title").innerText = years[index].year;
    document.getElementById("year-description").innerText = years[index].description;
    document.getElementById("year-image").src = years[index].image;

    document.querySelectorAll(".year").forEach((el, i) => {
        el.classList.toggle("active", i === index);
    });
}

function move(direction) {
    currentIndex = Math.max(0, Math.min(years.length - 1, currentIndex + direction));
    showYear(currentIndex);
}

showYear(0);

