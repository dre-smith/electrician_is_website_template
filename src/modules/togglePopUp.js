const togglePopUp = () => {
  const valueDisplay = (status) => {
    document.querySelector('.modal-callback').style.display = status;
    document.querySelector('.modal-overlay').style.display = status;
  };
  document.querySelector('body').addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('#callback')) {
      if (target.closest('.modal-close')) {
        event.preventDefault();
        valueDisplay('none');
      };
    } else {
      if (target.closest('a.callback-btn, a.absolute, .button-services')) {
        event.preventDefault();
        valueDisplay('block');
      } else {
        event.preventDefault();
        valueDisplay('none');
      };
    };
  });
};
export default togglePopUp;