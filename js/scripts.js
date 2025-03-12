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
        },
        "darwin": {
            name: "Charles Robert Darwin",
            image: "https://bioygeologia.weebly.com/uploads/4/8/2/5/48255833/8502673_orig.jpg",
            text: "fue un naturalista inglés, reconocido por ser el científico más influyente de los que plantearon la idea de la evolución biológica a través de la selección natural, justificándola en su obra El origen de las especies (1859) con numerosos ejemplos extraídos de la observación de la naturaleza. "
        },
        "mendel": {
            name: "Gregor Johann Mendel",
            image: "https://i.ytimg.com/vi/ubV7BzUsbqc/maxresdefault.jpg",
            text: "fue un fraile agustino católico y naturalista. Formuló, por medio de los trabajos que llevó a cabo con diversa variedad de guisantes y arvejas, las hoy llamadas leyes de Mendel que dieron origen a la herencia genética. "
        },
        "franklin": {
            name: "Rosalind Franklin",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Rosalind_Franklin.jpg/330px-Rosalind_Franklin.jpg",
            text: "fue una química y cristalógrafa británica cuyo trabajo fue fundamental para la comprensión de las estructuras moleculares del ácido desoxirribonucleico (ADN), el ácido ribonucleico (ARN), los virus, el carbón y el grafito. "
        },
        "fleming": {
            name: "Alexander Fleming",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9kKf6SxvIV-ZCg7A79f7ApMLVDdaGvWFQ&s",
            text: "un médico y científico británico famoso por ser el descubridor de la penicilina en 1928, al observar de forma casual sus efectos antibióticos sobre un cultivo bacteriano, fue obtenida a partir del hongo Penicillium notatum. "
        },
        "pasteur": {
            name: "Louis Pasteur",
            image: "https://escuelaclinica.lat/wp-content/uploads/LCSA112.jpg",
            text: " se convirtió en uno de los fundadores de la microbiología y el creador de la base científica para la vacunación y las vacunas contra el carbunco, el cólera aviar y la rabia."
        },
        "nightingale": {
            name: "Florence Nightingale",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/%27One_of_the_wards_in_the_hospital_at_Scutari%27._Wellcome_M0007724_-_restoration%2C_cropped.jpg/330px-%27One_of_the_wards_in_the_hospital_at_Scutari%27._Wellcome_M0007724_-_restoration%2C_cropped.jpg",
            text: "fue una enfermera, escritora y estadística británica, considerada precursora de la enfermería profesional contemporánea y creadora del primer modelo conceptual de enfermería."
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
