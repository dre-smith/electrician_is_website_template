const form = () => {
    const formName = document.querySelectorAll('#callback input')[0],
        formPhone = document.querySelectorAll('#callback input')[1];

    formName.addEventListener('input', () => {
        formName.value = formName.value.replace(/[^А-Яа-яЕё]/g, '');
    });

    formPhone.addEventListener('input', () => {
        formPhone.value = formPhone.value.replace(/[^0-9\+]/g, '');
    });
};
export default form;