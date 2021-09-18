const form = () => {
    const name = document.querySelector(`#callback input[name=fio]`),
        phone = document.querySelector(`#callback input[name=tel]`),
        inputs = document.querySelectorAll(`#callback input[name=fio], #callback input[name=tel]`);

    inputs.forEach((elem, index) => {
        elem.maxLength = 16;
        elem.addEventListener('input', () => {
            if (index == 0) {
                elem.value = elem.value.replace(/[^А-Яа-яЕё]/g, '');
            };
            if (index == 1) {
                elem.value = elem.value.replace(/[^\d+]/g, '');
            };
        });
        elem.addEventListener('blur', () => {
            if (elem.value.length < 3) {
                elem.value = '';
            };
        });
    });
};
export default form;