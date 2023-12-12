let textInput = document.getElementById("task__input");
let addButton = document.getElementById("tasks__add");
let taskList = document.getElementById("tasks__list");

addButton.addEventListener("click", () => {
	event.preventDefault();
	textInput.required = true;
	if (textInput.checkValidity()) {
		let element = document.createElement("div");
		element.classList.add("task");
		element.innerHTML = ` <div class="task__title">
			${textInput.value}
		  </div>
		  <a href="#" class="task__remove">&times;</a>`;
		taskList.insertAdjacentElement("afterBegin", element);
		document.getElementById("tasks__form").reset();

		element.querySelector(".task__remove").addEventListener("click", (event) => {
			event.preventDefault();
			event.currentTarget.parentNode.remove();
		})
	}
})