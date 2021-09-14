const form = () => {
    const formName = document.querySelector('#callback input'),
        formPhone = document.querySelector('#callback input.tel')
    formName.addEventListener('input', () => {
        formName.value = formName.value.replace(/[^А-Яа-яЕё]/g, '');
    });
    formPhone.addEventListener('input', () => {
        formPhone.value = formPhone.value.replace(/[^0-9\+]/g, '');
    });
};
export default form;