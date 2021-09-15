const faq = () => {
    const toggleElement = document.querySelectorAll('.accordeon .element'),
        buttonTitle = document.querySelectorAll('.accordeon .title'),
        elementContent = document.querySelectorAll('.accordeon .element-content');
    buttonTitle.forEach((elem, index) => {
        toggleElement[index].classList.remove('active');
        elementContent[index].style.display = 'none';
        elem.addEventListener('click', () => {
            toggleElement[index].classList.toggle('active');
            elementContent[index].style.display == 'none' ? elementContent[index].style.display = 'block' : elementContent[index].style.display = 'none';
        });
    });
};
export default faq;