const navScroll = () => {
    const body = document.querySelector('body');
    const scrollTo = (elem) => {
        document.querySelector(elem).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.top-menu')) {
            event.preventDefault();
            if (target.closest('.top-menu a')) {
                scrollTo(target.closest('.top-menu a').getAttribute('href'));
            };
        };
    });
};
export default navScroll;