const faq = () => {
    const toggleElement = document.querySelectorAll('.accordeon .element'),
        buttonTitle = document.querySelectorAll('.accordeon .title'),
        elementContent = document.querySelectorAll('.accordeon .element-content');
    buttonTitle.forEach((elem, index) => {
        const closeAllElements = () => {
            for (let i = 0; i < buttonTitle.length; i++) {
                toggleElement[i].classList.remove('active');
                elementContent[i].style.display = 'none';
            };
        };
        elem.addEventListener('click', () => {
            closeAllElements();
            toggleElement[index].classList.add('active');
            elementContent[index].style.display == 'none' ? elementContent[index].style.display = 'block' : elementContent[index].style.display = 'none';
        });
    });
};
export default faq;