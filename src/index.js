'use strict';

import maskPhone from './modules/maskPhone';
import form from './modules/form';
import togglePopUp from './modules/togglePopUp';
import navScroll from './modules/navScroll';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import faq from './modules/faq';
import scrollUp from './modules/scrollUp';
import sendForm from './modules/sendForm';

maskPhone(`input[name='tel']`);
form();
togglePopUp();
navScroll();
slider();
sliderCarousel();
faq();
scrollUp();
sendForm();
