const SLIDES = document.querySelectorAll('.sliderImg');

const LEFT_BTN = document.querySelector('.arrowLeft');
const RIGHT_BTN = document.querySelector('.arrowRight');

const DOTS = document.querySelectorAll('.dot');

const SLIDER_NAMES = document.querySelectorAll('.slider-links__link');

const SLIDER_INFO = document.querySelectorAll('.completed-projects-info-pc');

let slide = 0;
let dot = 0;
let slider_name = 0;
let slider_info = 0;


function nextSlide() {
    RIGHT_BTN.addEventListener('click', function(event) {
        //Точки меняются
        dot = (dot + 1)%DOTS.length;
        DOTS[dot].checked = true;
        
        //Меняются заголовки слайдера
        SLIDER_NAMES[slider_name].classList.remove('link--active');
        slider_name = (slider_name + 1)%SLIDER_NAMES.length;
        SLIDER_NAMES[slider_name].classList.add('link--active');

        //Меняются слайды
        SLIDES[slide].classList.remove('visible');
        slide = (slide + 1)%SLIDES.length;
        SLIDES[slide].classList.add('visible');

        //Меняется информация
        SLIDER_INFO[slider_info].classList.remove('visible');
        slider_info = (slider_info + 1)%SLIDER_INFO.length;
        SLIDER_INFO[slider_info].classList.add('visible');
    })
}

function prevSlide() {
    LEFT_BTN.addEventListener('click', function(event) {
        //Меняются точки
        if (dot > 0) {
            dot -= 1;
        } else {
           dot = DOTS.length - 1;
        }
        DOTS[dot].checked = true;

        //Меняются заголовки слайдера
        SLIDER_NAMES[slider_name].classList.remove('link--active');
        if (slider_name > 0) {
            slider_name -= 1;
        } else {
            slider_name = SLIDER_NAMES.length - 1;
        }
        SLIDER_NAMES[slider_name].classList.add('link--active');

        //Меняются слайды
        SLIDES[slide].classList.remove('visible');
        if (slide > 0) {
            slide -= 1;
        } else {
            slide = SLIDES.length - 1;
        }
        SLIDES[slide].classList.add('visible');

        //Меняется информация
        //Меняется информация
        SLIDER_INFO[slider_info].classList.remove('visible');
        if (slider_info > 0) {
            slider_info -= 1;
        } else {
            slider_info = SLIDER_INFO.length - 1;
        }
        SLIDER_INFO[slider_info].classList.add('visible');
    })
}

nextSlide();

prevSlide();