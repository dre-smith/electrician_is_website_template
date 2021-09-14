const togglePopUp = () => {
    const valueDisplay = (status) => {
        document.querySelector('.modal-callback').style.display = status;
        document.querySelector('.modal-overlay').style.display = status;
    };
    document.querySelector('body').addEventListener('click', (event) => {
        const target = event.target;
        target.closest('#callback') ? event.preventDefault(target.closest('.modal-close') ? valueDisplay('none') : '') :
            (target.closest('a.callback-btn, .button-services') ? valueDisplay('block') : valueDisplay('none'));
    });
};
togglePopUp();
export default togglePopUp;