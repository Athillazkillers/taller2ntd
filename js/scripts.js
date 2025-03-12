/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

let currentIndex = 0;
const slides = document.querySelectorAll(".slider-item");
const infoBox = document.getElementById("infoBox");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function showInfo(person) {
    const info = {
        "herodoto": {
            name: "Heródoto",
            image: "https://patrimoniodigital.ucm.es/files/large/cbc3fc6995a3315e8cd9001681a7324826f46e94.jpg",
            text: "Considerado el 'Padre de la Historia', Heródoto fue un historiador griego del siglo V a.C. que documentó las costumbres y guerras del mundo antiguo."
        },
        "champollion": {
            name: "Jean-François Champollion",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DK6i9xRfX9Pu5-nlmDDmw6oafy3EdunOtg&s",
            text: "Filólogo y lingüista francés que descifró los jeroglíficos egipcios en 1822 gracias a la Piedra de Rosetta, revolucionando el estudio del Antiguo Egipto."
        },
        "carter": {
            name: "Howard Carter",
            image: "https://c.files.bbci.co.uk/6F27/production/_126555482_gettyimages-89856213-1.jpg",
            text: "Arqueólogo británico famoso por descubrir en 1922 la tumba intacta de Tutankamón en el Valle de los Reyes, un hito en la egiptología."
        },
        "schmidt": {
            name: "Klaus Schmidt",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKc2U-DiWQzIrEPkcIdfWo0MZBrbItXFx5ibj1v1uz35saLkc6aSVoQeBbXguRphsdsZSLDUFcsk5ta2XABXpcQJn9OHNeKI_zzIr4GcLnYBcKAZa2Hfk12c53Ph69Gks_MAcec5m7-VI/s1600/G%25C3%25B6bekli+Tepe+2.jpg",
            text: "Arqueólogo alemán responsable de las excavaciones en Göbekli Tepe, un yacimiento de más de 11,000 años de antigüedad que cambió la visión sobre las sociedades prehistóricas."
        },
        "beauchamp": {
            name: "Pierre-Joseph de Beauchamp",
            image: "https://i0.wp.com/viajealpatrimonio.com/wp-content/uploads/2022/06/1116-babilonia.jpg?ssl=1",
            text: "Astrónomo y arqueólogo francés que por primara vez, en 1726, exploró Babilonia y documentó inscripciones cuneiformes, ayudando a descifrar la sociedad mesopotámica."
        }
    };
    
    if (info[person]) {
        infoBox.innerHTML = `
            <h3>${info[person].name}</h3>
            <img src="${info[person].image}" alt="${info[person].name}">
            <p>${info[person].text}</p>
        `;
        infoBox.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (slides.length > 0) {
        showSlide(currentIndex);
    }

    // Funcionalidad de desplazamiento para index.html
    const scrollLinks = document.querySelectorAll(".js-scroll-trigger");
    if (scrollLinks.length > 0) {
        scrollLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            });
        });
    }
});
