const slider = () => {
  const slide = document.querySelectorAll('.item'),
    slider = document.querySelector('.top-slider');

  const slickDots = document.createElement('ul');
  slider.insertAdjacentElement('beforeend', slickDots).classList.add('slick-dots');

  slide.forEach((elem, index) => {
    if (index !== 0) {
      elem.classList.remove('relative');
    };
  });

  let currentSlide = 0,
    interval;

  const style = document.createElement('style');
  style.id = 'slider__style';
  document.head.appendChild(style);
  document.getElementById('slider__style').textContent = `
  .top-slider .slick-dots {
      z-index: 10;
  }
  .top-slider .item {
      position: static;
      display: none;
  }
  .top-slider .relative {
      position: relative;
      display: block;
  }
  .top-slider .table {
      opacity: 1;
      visibility: visible;
  }`;
  const addDot = () => {
    const slickDots = document.querySelector('.slick-dots');
    slide.forEach(() => {
      const dot = document.createElement('li');
      dot.classList.add('dot');
      slickDots.append(dot);
    });
    slickDots.children[0].classList.add('slick-active');
  };
  addDot();
  const dots = document.querySelectorAll('.dot');
  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'relative');
    prevSlide(dots, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    };
    nextSlide(slide, currentSlide, 'relative');
    nextSlide(dots, currentSlide, 'slick-active');
  };
  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };
  slider.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    if (!target.matches('.portfolio-btn, .dot')) {
      return;
    };
    prevSlide(slide, currentSlide, 'relative');
    prevSlide(dots, currentSlide, 'slick-active');
    if (target.matches('.dot')) {
      dots.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        };
      });
    };
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    };
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    };
    nextSlide(slide, currentSlide, 'relative');
    nextSlide(dots, currentSlide, 'slick-active');
  });
  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.dot')) {
      stopSlide();
    };
  });
  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.dot')) {
      startSlide();
    };
  });
  startSlide(3000);
};
export default slider;