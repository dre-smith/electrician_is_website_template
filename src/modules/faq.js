const faq = () => {
    const toggleElement = document.querySelectorAll('.accordeon .element'),
        buttonTitle = document.querySelectorAll('.accordeon .title'),
        elementContent = document.querySelectorAll('.accordeon .element-content');

    const changeContent = () => {
        toggleElement.classList.toggle('active');
        elementContent.style.display == 'none' ? elementContent.style.display = 'block' : elementContent.style.display = 'none';
    };
};
export default faq;