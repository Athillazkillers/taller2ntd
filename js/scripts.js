

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
    { year: "Yuri Gagarin", description:"Yuri Gagarin nacido en Rusia en 1934, su padre fue un carpitero y estudio 6 años en la escuela local, Yuri se unio a la Fuerza Area Rusa en 1995 y graduado con honores en la Academia de la Fuerza Aerea Sovietica en 1957, luego de ello se convirtio en piloto de guerra. Para 1959 fue seleccionado para realizar entrenamiento cosmonautico como parte del primer grupo de cosmonautas sovieticos, el 12 de abril de 1961 transformandose en el primer humano que orbito la Tierra.La nave de Gagarin, la Vostok 1, circulo la Tierra a la velocidad de 27.400 kilometros por hora, el vuelo duro 108 minutos.En el punto mas alto Gagarin estuvo a 327 kilometros de la Tierra ", image: "yuri.JPG" },
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

