let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
document.querySelectorAll('.featured-image-1').forEach(image_1 => {
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src');
        let bigImage1 = document.querySelector('.big-image-1');
        if (bigImage1) {
            bigImage1.src = src;
        }
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 => {
    image_2.addEventListener('click', () => {
        var src = image_2.getAttribute('src');
        let bigImage2 = document.querySelector('.big-image-2');
        if (bigImage2) {
            bigImage2.src = src;
        }
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 => {
    image_3.addEventListener('click', () => {
        var src = image_3.getAttribute('src');
        let bigImage3 = document.querySelector('.big-image-3');
        if (bigImage3) {
            bigImage3.src = src;
        }
    });
});     document.querySelector('.big-image-3').src = src;
    }