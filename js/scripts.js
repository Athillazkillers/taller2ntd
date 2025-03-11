

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
    { year: "Yuri Gagarin", description:"Yuri Gagarin nació en Rusia en 1934. Su padre era carpintero y estudió durante seis años en la escuela local. En 1955, se unió a la Fuerza Aérea Soviética y se graduó con honores en la Academia de la Fuerza Aérea en 1957, tras lo cual se convirtió en piloto de combate.Para 1959, fue seleccionado para el entrenamiento como cosmonauta, formando parte del primer grupo de cosmonautas soviéticos. Finalmente, el 12 de abril de 1961, Gagarin hizo historia al convertirse en el primer ser humano en orbitar la Tierra.A bordo de la nave Vostok 1, completó una órbita alrededor del planeta a una velocidad de 27,400 kilómetros por hora. El vuelo tuvo una duración total de 108 minutos y alcanzó una altitud máxima de 327 kilómetros.", image: "yuri.JPG" },
    { year: "Gabriel Garcia Marquez", description: "Gabriel Garcia Marquez pasa sus primero años en una zona caribeña al norte de colombia.En 1947 estudia derecho, carrera que abandonaria para dedicarse al periodismo, su primera obra la hojarasca, se publica en 1955, viaja a Europa y se queda 4 años, regresa a America a 1958 y se instala temporalmente en Venezuela,donde compagina una intensa actividad periodistica con la escritura de los relatos de Los funerales de la Mama Grande (1962).Tras unos meses en cuba  y vivir en New York como corresponsal se establece en Mexico.  ", image: "gabriel.JPG" },
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

