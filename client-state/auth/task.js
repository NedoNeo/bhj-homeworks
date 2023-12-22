const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const login = [...document.querySelectorAll('.control')][0];
const password = [...document.querySelectorAll('.control')][1];
const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');
const block_signin = document.getElementById('signin');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  let formData = new FormData(form);
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.send(formData);
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE && xhr.status === 201) {
      let data = JSON.parse(xhr.responseText);
      if (data.success === true) {
        localStorage.id = data.user_id;
        welcome.classList.add('welcome_active');
        id.insertAdjacentText('afterbegin', localStorage.id);
        block_signin.classList.remove('signin_active');
      } else if (data.success === false) {
        alert('Неверный логин/пароль');
      }
    }
  })
})

window.onload = function () {
  if (localStorage.length > 0) {
    block_signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    id.insertAdjacentText('afterbegin', localStorage.id);
  }
};


