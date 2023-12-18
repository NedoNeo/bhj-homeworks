let forElement = document.getElementById("form");
let progressBar = document.getElementById("progress");


forElement.addEventListener("submit", (event) => {
	event.preventDefault()
	let fomObject = new FormData(forElement);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
	xhr.upload.onprogress = (event) => {
		progressBar.value = event.loaded / event.total;
	}
	xhr.send(fomObject);
})