const togglePopUp = () => {
    const valueDisplay = (status) => {
        document.querySelector('.modal-callback').style.display = status;
        document.querySelector('.modal-overlay').style.display = status;
    };
    document.querySelector('body').addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('#callback')) {
            event.preventDefault();
            if (target.closest('.modal-close')) {
                valueDisplay('none');
            };
        } else {
            if (target.closest('a.callback-btn, .button-services')) {
                valueDisplay('block');
            } else {
                valueDisplay('none');
            };
        };
    });
};
togglePopUp();
export default togglePopUp;