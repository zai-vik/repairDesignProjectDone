const LEFT_BTN_MOBILE = document.querySelectorAll('.slider__leftBtn');
const RIGHT_BTN_MOBILE = document.querySelectorAll('.slider__rightBtn');

const SLIDES_MOBILE = document.querySelectorAll('.completed-projects-slider__img');

const SLIDERS_INFO_MOBILE = document.querySelectorAll('.completed-projects-info-mobile');

const SLIDES_REALIZE = document.querySelectorAll('.we-realize-slider__img');

let slide_mobile = 0;
let sliders_info_mobile = 0;
let slide_realize = 0;

function nextSlideMobile() {
    RIGHT_BTN_MOBILE[0].addEventListener('click', function(event) {
        //Меняются слайды
        SLIDES_MOBILE[slide_mobile].classList.remove('visible');
        slide_mobile = (slide_mobile + 1)%SLIDES_MOBILE.length;
        SLIDES_MOBILE[slide_mobile].classList.add('visible');

        //Меняется информация
        SLIDERS_INFO_MOBILE[sliders_info_mobile].classList.remove('visible');
        sliders_info_mobile = (sliders_info_mobile + 1)%SLIDERS_INFO_MOBILE.length;
        SLIDERS_INFO_MOBILE[sliders_info_mobile].classList.add('visible');
    })

    RIGHT_BTN_MOBILE[1].addEventListener('click', function(event) {
        //Меняются слайды
        SLIDES_REALIZE[slide_realize].classList.remove('visible');
        slide_realize = (slide_realize + 1)%SLIDES_REALIZE.length;
        SLIDES_REALIZE[slide_realize].classList.add('visible');
    })
}

function prevSlideMobile() {
    LEFT_BTN_MOBILE[0].addEventListener('click', function(event) {
        //Меняются слайды
        SLIDES_MOBILE[slide_mobile].classList.remove('visible');
        if (slide_mobile > 0) {
            slide_mobile -= 1;
        } else {
            slide_mobile = SLIDES_MOBILE.length - 1;
        }
        SLIDES_MOBILE[slide_mobile].classList.add('visible');

        //Меняется информация
        SLIDERS_INFO_MOBILE[sliders_info_mobile].classList.remove('visible');
        if (sliders_info_mobile > 0) {
            sliders_info_mobile -= 1;
        } else {
            sliders_info_mobile = SLIDERS_INFO_MOBILE.length - 1;
        }
        SLIDERS_INFO_MOBILE[sliders_info_mobile].classList.add('visible');
    })

    LEFT_BTN_MOBILE[1].addEventListener('click', function(event) {
        //Меняются слайды
        SLIDES_REALIZE[slide_realize].classList.remove('visible');
        if (slide_realize > 0) {
            slide_realize -= 1;
        } else {
            slide_realize = SLIDES_REALIZE.length - 1;
        }
        SLIDES_REALIZE[slide_realize].classList.add('visible');
    })
}

nextSlideMobile();

prevSlideMobile();