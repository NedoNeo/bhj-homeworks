const input = document.getElementById('editor');

input.addEventListener('input', (event) => {
  localStorage.inputContent = input.value;
  let value = localStorage.getItem('inputContent');
  input.value = value;
})

if (localStorage.getItem('inputContent')) {
  input.value = localStorage.getItem('inputContent');
} else {
  input.value = "";
}