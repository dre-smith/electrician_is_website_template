const sendForm = () => {
  const errorMessage = 'Ошибка!',
    loadMessage = 'Идёт отправка...',
    successMessage = 'Отправлено!',
    form = document.querySelector(`form[name='form-callback']`),
    statusMessage = document.createElement('div');

  statusMessage.style.cssText = 'font-weight: bold';

  form.addEventListener('submit', (event) => {
    const input = form.querySelectorAll(`input[type='text']`);
    event.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    };
    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        };
        statusMessage.textContent = successMessage;
        setTimeout(() => {
          statusMessage.textContent = ''
          document.querySelector('.modal-callback').style.display = 'none';
          document.querySelector('.modal-overlay').style.display = 'none';
        }, 3000);
        input.forEach((input) => {
          input.value = '';
        });
      })
      .catch(() => {
        statusMessage.textContent = errorMessage;
        setTimeout(() => (statusMessage.textContent = ''), 3000);
      });
  });
};
export default sendForm;