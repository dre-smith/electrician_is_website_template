const togglePopUp = () => {
    const valueDisplay = (status) => {
        document.querySelector('.modal-callback').style.display = status;
        document.querySelector('.modal-overlay').style.display = status;
    };
    document.querySelector('body').addEventListener('click', (event) => {
        const target = event.target;
        event.preventDefault();
        if (target.closest('#callback')) {
            if (target.closest('.modal-close')) {
                valueDisplay('none');
            };
        } else {
            if (target.closest('a.callback-btn, a.absolute, .button-services')) {
                valueDisplay('block');
            } else {
                valueDisplay('none');
            };
        };
    });
};
togglePopUp();
export default togglePopUp;