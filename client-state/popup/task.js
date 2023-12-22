const modal = document.getElementById('subscribe-modal');
const close = modal.querySelector('.modal__close');

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
      .pop()
      .split(";")
      .shift();
  }
}

if (getCookie('modal__close') == 'yes') {
  modal.classList.remove('modal_active');
} else {
  modal.classList.add('modal_active');
}

close.addEventListener('click', () => {
  document.cookie = "modal__close=yes";
  modal.classList.remove('modal_active');
})