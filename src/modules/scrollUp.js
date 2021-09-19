const scrollUp = () => {
  const up = document.querySelector('.up'),
    toggleUp = document.querySelector('.push100');
  up.style.display = 'none';
  window.addEventListener('scroll', () => {
    window.pageYOffset > toggleUp.offsetTop ? up.style.display = 'block' : up.style.display = 'none';
  });
  up.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};
export default scrollUp;