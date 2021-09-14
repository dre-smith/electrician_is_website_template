const scrollUp = () => {
    const up = document.querySelector('.up'),
        toggleUp = document.querySelector('.push100');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > toggleUp.offsetTop) {
            up.style.display = 'block';
        } else {
            up.style.display = 'none';
        };
    });
    up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
};
export default scrollUp;