const slider = () => {
    const slide = document.querySelectorAll('.item'),
        slider = document.querySelector('.top-slider');

    const slickDots = document.createElement('ul')
    slider.insertAdjacentElement('beforeend', slickDots).classList.add('slick-dots');

};
export default slider;