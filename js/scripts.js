

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
    { year: "Simon de Beavoir", description:" Simone de Beauvoir (1908-1986) fue una filósofa, escritora y feminista francesa, reconocida por su influencia en el existencialismo y el feminismo contemporáneo. Su obra más importante, El segundo sexo, analiza la concepción y el trato de la mujer a lo largo de la historia desde diversas perspectivas. En este ensayo, de Beauvoir destaca que muchas de las características atribuidas a las mujeres no son innatas, sino adquiridas a través de la educación y la socialización, más que determinadas únicamente por la biología.", image: "Simon.jpg" },
    { year: "Yuri Gagarin", description: "Evento importante en 1950.", image: "https://images.app.goo.gl/BArgLmXrDud3Hrae8.jpg" },
    { year: "Gabriel Garcia Marquez", description: "Evento importante en 1960.", image: "imagen.jpg" },
    { year: "1980", description: "Evento importante en 1970.", image: "imagen4.jpg" },
    { year: "1990", description: "Evento importante en 1980.", image: "imagen5.jpg" },
  
];

let currentIndex = 0;

function showYear(index) {
    currentIndex = index;

    let title = document.getElementById("year-title");
    let description = document.getElementById("year-description");
    let image = document.getElementById("year-image");

    console.log("Cambiando a:", years[index]);  

    if (title && description && image) {
        title.innerText = years[index].year;
        description.innerText = years[index].description;
        image.src = years[index].image;  
        image.alt = "Imagen de " + years[index].year;  

        console.log("Nueva ruta de la imagen:", image.src);  //  verificar la ruta final
    }
}



function move(direction) {
    currentIndex = Math.max(0, Math.min(years.length - 1, currentIndex + direction));
    showYear(currentIndex);
}

showYear(0);

