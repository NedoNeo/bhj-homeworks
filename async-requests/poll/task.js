let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

let buttonStorage = document.querySelector(".poll__answers");
let titleButton = document.querySelector(".poll__title");
let newButton = document.createElement("button");
newButton.classList.add("poll__answer");


xhr.addEventListener("readystatechange", () => {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		let question = JSON.parse(xhr.responseText);

		titleButton.textContent = question.data.title;
		question.data.answers.forEach((element, id) => {
			let answerButton = newButton.cloneNode(false);
			answerButton.textContent = element;
			answerButton.addEventListener("click", () => {
				const answerXhr = new XMLHttpRequest();
				answerXhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
				answerXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				answerXhr.send(`vote=${question.id}&answer=${id}`);
				alert("Спасибо за овтет!");
				document.querySelector(".poll").remove();
				answerXhr.addEventListener("readystatechange", () => {
					if (answerXhr.readyState === answerXhr.DONE) {
						let answerJson = JSON.parse(answerXhr.responseText);
						document.querySelector(".card").insertAdjacentText("afterbegin", question.data.title);
						answerJson.stat.forEach((el) => {
							document.querySelector(".card").insertAdjacentHTML("beforeend", `<p>${el.answer}: ${el.votes}</p>`);
						})
					}
				})

			});
			buttonStorage.append(answerButton);
		});
	}
})