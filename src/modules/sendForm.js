const sendForm = () => {
    const errorMessage = 'Ошибка!',
        loadMessage = 'Идет отправка...',
        successMessage = 'Отправлено!';
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const clearInput = () => {
        const inputName = document.querySelector(`#callback input[name='fio']`),
            inputPhone = document.querySelector(`#callback input[name='tel']`);
        inputName.value = '';
        inputPhone.value = '';
    };
    const loadForm = form => {
        const statusMessage = document.createElement('div');
        form.append(statusMessage);
        statusMessage.style.display = 'block';
        statusMessage.textContent = loadMessage;
        postData(Object.fromEntries(new FormData(form)))
            .then(response => {
                if (response.status !== 200) throw new Error(`Status network ${request.status} `);
                statusMessage.textContent = successMessage;
                setTimeout(() => {
                    document.querySelector('.modal-overlay').style.display = 'none';
                    document.getElementById('callback').style.display = 'none';
                    statusMessage.textContent = '';
                }, 3000);
            })
            .catch(() => {
                statusMessage.textContent = errorMessage;
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                    statusMessage.textContent = '';
                }, 3000);
            });
        clearInput();
    };
    document.body.addEventListener('submit', event => {
        event.preventDefault();
        const target = event.target;
        loadForm(target);
    });
};
export default sendForm;